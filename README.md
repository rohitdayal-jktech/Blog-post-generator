# 📝 AI Blog Post Generator

A modern web application to instantly generate full-length, high-quality blog posts using either local LLMs (via Ollama) or cloud chatbot APIs like OpenAI, Claude, or Gemini. Designed with Next.js + Tailwind CSS + dark mode + responsive UI.

---

## 🚀 Features

- ✨ Input-based blog generation (Topic, Tone, Length, Audience, Keywords)
- 💡 Side-by-side layout: Form on the left, output on the right
- 🎨 Beautiful UI with custom gradients and full dark mode support
- 📱 Responsive and mobile-friendly
- 🔁 Extensible architecture for features like SEO metadata, rewriters, etc.
- 🧠 Modular design: supports both local LLMs (via Ollama) or remote APIs

---

## 🖼️ Preview

![Landing page ](public/Screenshot1.png)


![Generate Blog](public/Screenshot2.png)

---

## 🧰 Tech Stack

- **Frontend**: [Next.js (App Router)](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [MUI Icons](https://mui.com/material-ui/material-icons/)
- **Dark Mode**: Custom `ThemeContext`
- **LLM Integration**: Local (LLaMA 3 via Ollama) or remote (OpenAI, Claude, Gemini)
- **Language**: TypeScript

---

## 🧭 How It Works

1. ✏️ **Enter a Topic** – Define what your blog is about.
2. 🎭 **Select Tone** – Choose between professional, casual, funny, etc.
3. 📏 **Choose Length** – Pick short, medium-length, or long.
4. 🧑‍💼 **Define Audience** – e.g., small business owners, developers.
5. 🔍 **Add Keywords (optional)** – SEO-friendly targeting.
6. 📤 **Submit Form** – Prompts are sent to a local or cloud model.
7. 📄 **Receive Output** – Full blog post (intro, body, conclusion).

---



First, run the development server:

```bash
npm install
npm run dev

```

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
Example - 

```json
{
  "topic": "AI in healthcare",
  "tone": "professional",
  "length": "medium-length",
  "audience": "doctors and researchers",
  "keywords": "machine learning, diagnostics"

