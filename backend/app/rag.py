from typing import Any

from langchain_community.vectorstores import Chroma
from langchain_community.embeddings import OllamaEmbeddings
from ollama import chat

from app.config import (
    CHROMA_PATH,
    COLLECTION_NAME,
    EMBEDDING_MODEL,
    LLM_MODEL,
    OLLAMA_HOST,
    TOP_K,
)
from app.prompt import PROMPT_TEMPLATE


def get_vector_db() -> Chroma:
    embedding_function = OllamaEmbeddings(
        model=EMBEDDING_MODEL,
        base_url=OLLAMA_HOST,
    )

    db = Chroma(
        collection_name=COLLECTION_NAME,
        persist_directory=CHROMA_PATH,
        embedding_function=embedding_function,
    )
    return db


def query_rag(question: str) -> dict[str, Any]:
    db = get_vector_db()

    results = db.similarity_search_with_score(question, k=TOP_K)

    context_parts = []
    sources = []

    for doc, score in results:
        context_parts.append(doc.page_content)
        sources.append({
            "id": doc.metadata.get("id", ""),
            "source": doc.metadata.get("source", "unknown"),
            "section": doc.metadata.get("section", "unknown"),
            "text": doc.page_content,
            "score": float(score),
        })

    context_text = "\n\n---\n\n".join(context_parts)

    prompt = PROMPT_TEMPLATE.format(
        context=context_text,
        question=question,
    )

    response = chat(
        host=OLLAMA_HOST,
        model=LLM_MODEL,
        messages=[
            {
                "role": "user",
                "content": prompt,
            }
        ],
    )

    answer = response["message"]["content"]

    return {
        "answer": answer,
        "sources": sources,
    }