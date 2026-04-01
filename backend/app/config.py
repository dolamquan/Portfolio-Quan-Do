import os


# Directory where ChromaDB stores persisted vectors.
CHROMA_PATH = os.getenv("CHROMA_PATH", "chroma")

# Chroma collection used for the portfolio knowledge base.
COLLECTION_NAME = os.getenv("COLLECTION_NAME", "quan_portfolio")

# Ollama models.
LLM_MODEL = os.getenv("LLM_MODEL", "llama3.2")
EMBEDDING_MODEL = os.getenv("EMBEDDING_MODEL", "nomic-embed-text")

# Retrieval and chunking settings.
TOP_K = int(os.getenv("TOP_K", "5"))
CHUNK_SIZE = int(os.getenv("CHUNK_SIZE", "800"))
CHUNK_OVERLAP = int(os.getenv("CHUNK_OVERLAP", "80"))

# Source docs folder for ingestion.
DATA_DIR = os.getenv("DATA_DIR", "data")

# Comma-separated list of allowed CORS origins for frontend clients.
CORS_ORIGINS = os.getenv(
	"CORS_ORIGINS",
	"http://localhost:5173,http://127.0.0.1:5173,https://dolamquan.github.io",
)