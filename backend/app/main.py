from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field

from app.ingest import ingest_documents
from app.rag import query_rag
from app.config import CORS_ORIGINS


app = FastAPI(title="Quan Portfolio RAG API")


origins = [origin.strip() for origin in CORS_ORIGINS.split(",") if origin.strip()]


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
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
        raise HTTPException(status_code=500, detail=str(e))