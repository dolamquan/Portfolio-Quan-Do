# Default configuration for the application
# You can override these settings by providing a config.py file in the same directory with the desired values.

CHROMA_PATH = "chroma" # Directory where ChromaDB will store its data
COLLECTION_NAME = "quan_portfolio" # Name of the ChromaDB collection to use for storing and retrieving embeddings

LLM_MODEL = "llama3.2"
EMBEDDING_MODEL = "nomic-embed-text"

# Number of top relevant chunks to retrieve from ChromaDB for each query
TOP_K = 5
CHUNK_SIZE = 800
CHUNK_OVERLAP = 80

DATA_DIR = "data"