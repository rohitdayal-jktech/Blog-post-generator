interface BlogData {
  topic: string;
  tone: string;
  length: string;
  audience: string;
  keywords: string;
}

export async function generateBlog(data: BlogData): Promise<string> {
  try {
    const res = await fetch("http://localhost:8000/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    return result?.blog || "Failed to generate blog.";
  } catch {
    return "Error connecting to backend.";
  }
}
