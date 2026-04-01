# Backend Deployment Guide

## Free Hosting Options

- Render and Railway can host the FastAPI app on free tiers (subject to provider limits and sleep behavior).
- GitHub Pages cannot host this backend because it only serves static files.

## Ollama Compatibility

This backend uses Ollama for both embeddings and chat generation.

Important:
- Free PaaS web services usually do not provide enough RAM/CPU for running local Ollama models reliably.
- If the host does not run an Ollama daemon, requests will fail.
- You can point this backend to a separate Ollama machine by setting `OLLAMA_HOST`.

You have two practical choices:
- Run backend + Ollama locally (works now for development).
- Deploy backend to a VM that supports Docker/system services, then run Ollama there.
- Deploy backend on Render/Railway and set `OLLAMA_HOST` to a reachable Ollama server URL.

## Render Blueprint

A blueprint is provided at [render.yaml](../render.yaml).

1. In Render, create a new Blueprint service from your GitHub repo.
2. Select branch `main`.
3. Deploy.

## Frontend Configuration

Set this variable for your frontend build:

- `VITE_API_BASE_URL=https://<your-backend-domain>`

In GitHub:
1. Repository Settings
2. Secrets and variables
3. Actions
4. Add repository variable `VITE_API_BASE_URL`

Then update your pages workflow build step to pass that variable if needed.

## CORS

The backend now supports comma-separated origins through `CORS_ORIGINS`.
Default includes:
- `http://localhost:5173`
- `http://127.0.0.1:5173`
- `https://dolamquan.github.io`
