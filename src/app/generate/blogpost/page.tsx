"use client";

import BlogForm from "@/app/components/BlogForm";
import BlogOutput from "@/app/components/BlogOutput";
import { useState } from "react";
import { useTheme } from "@/app/contexts/ThemeContext";

export default function BlogPost() {
  const [output, setOutput] = useState("");
  const { darkMode } = useTheme();

  const cardStyle = darkMode
    ? "bg-gray-800 text-white border border-gray-700"
    : "bg-white text-gray-900 border border-gray-200";

  return (
    <main
      className={`max-w-6xl mx-auto px-6 py-16 transition-colors duration-300 ${
        darkMode ? "bg-black text-white" : "bg-gray-50 text-gray-800"
      }`}
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Generate a Blog Post</h2>
        <p className="text-lg text-gray-400 dark:text-gray-300">
          Fill out the form and get a complete, AI-written blog post in seconds.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <div className={`p-6 rounded-xl shadow-lg ${cardStyle}`}>
          <BlogForm setOutput={setOutput} />
        </div>
        <div
          className={`p-6 rounded-xl shadow-lg overflow-auto max-h-[600px] ${cardStyle}`}
        >
          <BlogOutput output={output} />
        </div>
      </div>
    </main>
  );
}
