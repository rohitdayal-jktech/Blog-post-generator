from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from app.ollama_chatbot import OllamaChatbot

# Create FastAPI instance
app = FastAPI()

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Use specific origin in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Chatbot instance
chatbot = OllamaChatbot()

# Request schema
class BlogRequest(BaseModel):
    topic: str
    tone: str
    length: str
    audience: str
    keywords: str

# Format the prompt
def construct_prompt(data: BlogRequest) -> str:
    prompt = (
        f"Generate a {data.length} blog post in a {data.tone} tone for an audience of {data.audience} "
        f"on the topic '{data.topic}'."
    )
    if data.keywords:
        prompt += f" Incorporate these keywords: {data.keywords}."
    prompt += " The post should include an introduction, body, and conclusion. Make it publication-ready."
    return prompt

# POST endpoint
@app.post("/generate")
async def generate_blog(data: BlogRequest):
    prompt = construct_prompt(data)
    blog_text = chatbot.chat(prompt)
    return {"blog": blog_text}
 