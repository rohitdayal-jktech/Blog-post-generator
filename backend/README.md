#readme
# 🧠 Blog Post Generator Backend

This is the **backend** service for the Blog Post Generator app. It uses **FastAPI** and **Ollama** to generate AI-written blog posts using the locally hosted `llama3.2:1b` model.

---

## 🚀 Features

- Accepts blog generation parameters like topic, tone, length, audience, and keywords
- Sends natural language prompts to the locally running **Ollama** LLM server
- Returns a structured blog post (intro, body, conclusion)
- Saves conversation history in `conversation_history.json`
- Can be extended to support OpenAI, Claude, Gemini, etc.

---

## 🧾 API Endpoint

### `POST /generate`

**Request Body:**

```json
{
  "topic": "AI in healthcare",
  "tone": "professional",
  "length": "medium-length",
  "audience": "doctors and researchers",
  "keywords": "machine learning, diagnostics"
}
 