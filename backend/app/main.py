from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field

from app.config import EMBEDDING_MODEL, LLM_MODEL
from app.ingest import ingest_documents
from app.rag import query_rag


app = FastAPI(title="Quan Portfolio RAG API")


app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class ChatRequest(BaseModel):
    message: str = Field(..., min_length=1, max_length=2000)


class SourceItem(BaseModel):
    id: str
    source: str
    section: str
    text: str
    score: float


class ChatResponse(BaseModel):
    answer: str
    sources: list[SourceItem]


class IngestResponse(BaseModel):
    success: bool
    count: int
    message: str


def _format_service_error_message(error: Exception) -> str | None:
    message = str(error)

    # Ollama connection failures often surface as urllib3/HTTPConnectionPool errors.
    if "localhost" in message and "11434" in message:
        return (
            "Cannot connect to Ollama at http://localhost:11434. "
            "Start Ollama (for example: 'ollama serve') and ensure models "
            f"'{EMBEDDING_MODEL}' and '{LLM_MODEL}' are available."
        )

    return None


@app.get("/")
def root():
    return {"message": "Quan Portfolio RAG API is running"}


@app.post("/api/ingest", response_model=IngestResponse)
def ingest(reset: bool = False):
    try:
        count = ingest_documents(reset=reset)
        return IngestResponse(
            success=True,
            count=count,
            message=f"Added {count} chunks to Chroma."
        )
    except Exception as e:
        service_error = _format_service_error_message(e)
        if service_error:
            raise HTTPException(status_code=503, detail=service_error)
        raise HTTPException(status_code=500, detail=str(e))


@app.post("/api/chat", response_model=ChatResponse)
def chat_endpoint(request: ChatRequest):
    try:
        result = query_rag(request.message)
        return ChatResponse(
            answer=result["answer"],
            sources=result["sources"],
        )
    except Exception as e:
        service_error = _format_service_error_message(e)
        if service_error:
            raise HTTPException(status_code=503, detail=service_error)
        raise HTTPException(status_code=500, detail=str(e))