// components/BlogForm.tsx
"use client";
import { useState } from "react";
import { generateBlog } from "../utils/api";

export default function BlogForm({
  setOutput,
}: {
  setOutput: (text: string) => void;
}) {
  const [topic, setTopic] = useState("");
  const [tone, setTone] = useState("professional");
  const [length, setLength] = useState("medium-length");
  const [audience, setAudience] = useState("");
  const [keywords, setKeywords] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await generateBlog({
      topic,
      tone,
      length,
      audience,
      keywords,
    });
    setOutput(response);
  };

  const inputClasses =
    "w-full p-2 border rounded bg-white dark:bg-gray-900 dark:text-white dark:border-gray-700";

  const selectClasses =
    "w-full p-2 border rounded bg-white dark:bg-gray-900 dark:text-white dark:border-gray-700";

  const buttonClasses =
    "bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 transition-colors";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex justify-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Input Your Blog Details
        </h2>
      </div>
      <input
        className={inputClasses}
        placeholder="Topic"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        required
      />
      <input
        className={inputClasses}
        placeholder="Audience"
        value={audience}
        onChange={(e) => setAudience(e.target.value)}
        required
      />
      <input
        className={inputClasses}
        placeholder="Keywords (optional, comma separated)"
        value={keywords}
        onChange={(e) => setKeywords(e.target.value)}
      />
      <select
        value={tone}
        onChange={(e) => setTone(e.target.value)}
        className={selectClasses}
      >
        <option value="professional">Professional</option>
        <option value="casual">Casual</option>
        <option value="funny">Funny</option>
      </select>
      <select
        value={length}
        onChange={(e) => setLength(e.target.value)}
        className={selectClasses}
      >
        <option value="short">Short</option>
        <option value="medium-length">Medium-Length</option>
        <option value="long">Long</option>
      </select>
      <div className="flex justify-center">
        <button type="submit" className={buttonClasses}>
          Generate Blog
        </button>
      </div>
    </form>
  );
}
