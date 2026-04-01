export type SourceItem = {
  id: string;
  source: string;
  section: string;
  text: string;
  score?: number;
};

export type ChatRequest = {
  message: string;
};

export type ChatResponse = {
  answer: string;
  sources: SourceItem[];
};

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL?.trim() ||
  (import.meta.env.PROD
    ? 'https://portfolio-quan-do.onrender.com'
    : 'http://localhost:8000');

const NORMALIZED_API_BASE_URL = API_BASE_URL.replace(/\/+$/, '');

export async function sendChatMessage(
  payload: ChatRequest
): Promise<ChatResponse> {
  const response = await fetch(`${NORMALIZED_API_BASE_URL}/api/chat`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    let errorMessage = 'Failed to get response from backend';

    try {
      const errorData = await response.json();
      if (errorData?.detail) {
        errorMessage = String(errorData.detail);
      }
    } catch {
      // ignore JSON parse failure and keep fallback message
    }

    throw new Error(errorMessage);
  }

  return response.json();
}

export async function ingestDocuments(reset = false) {
  const response = await fetch(
    `${NORMALIZED_API_BASE_URL}/api/ingest?reset=${String(reset)}`,
    {
      method: 'POST',
    }
  );

  if (!response.ok) {
    let errorMessage = 'Failed to ingest documents';

    try {
      const errorData = await response.json();
      if (errorData?.detail) {
        errorMessage = String(errorData.detail);
      }
    } catch {
      // ignore JSON parse failure and keep fallback message
    }

    throw new Error(errorMessage);
  }

  return response.json();
}