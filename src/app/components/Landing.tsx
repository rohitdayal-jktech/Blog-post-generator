// components/Landing.tsx
"use client";

import { useTheme } from "../contexts/ThemeContext";
import Link from "next/link";
import CreateIcon from "@mui/icons-material/Create";
import TuneIcon from "@mui/icons-material/Tune";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import GroupIcon from "@mui/icons-material/Group";
import StarsIcon from "@mui/icons-material/Stars";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import ArticleIcon from "@mui/icons-material/Article";

export default function Landing() {
  const { darkMode } = useTheme();

  const cardStyle = darkMode
    ? "bg-gray-800 text-white border-gray-700"
    : "bg-white text-gray-900 border-gray-200";

  const steps = [
    {
      icon: <CreateIcon className="text-pink-500" />,
      title: "Enter Topic",
      desc: "Start by typing the main subject of your blog post.",
    },
    {
      icon: <TuneIcon className="text-pink-500" />,
      title: "Select Tone",
      desc: "Pick a tone like professional, casual, or funny to match your brand.",
    },
    {
      icon: <FormatListNumberedIcon className="text-pink-500" />,
      title: "Choose Length",
      desc: "Decide if you want a short, medium, or long blog post.",
    },
    {
      icon: <GroupIcon className="text-pink-500" />,
      title: "Define Audience",
      desc: "Specify who you’re writing for (e.g., small business owners).",
    },
    {
      icon: <StarsIcon className="text-pink-500" />,
      title: "Add Keywords (Optional)",
      desc: "Boost SEO by including relevant keywords.",
    },
    {
      icon: <CloudUploadIcon className="text-pink-500" />,
      title: "Submit the Form",
      desc: "Your input is processed by a local or cloud AI model.",
    },
    {
      icon: <ArticleIcon className="text-pink-500" />,
      title: "Get Your Blog Post",
      desc: "Receive a full blog post with intro, body, and conclusion.",
    },
  ];

  return (
    <>
      <section
        className={`w-full py-20 transition-colors duration-300 ${
          darkMode
            ? "bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white"
            : "bg-gradient-to-br from-pink-500 via-pink-400 to-pink-600 text-white"
        }`}
      >
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            AI-Powered Blog Post Generator
          </h1>
          <p className="text-lg md:text-xl mb-10">
            Create professional, SEO-friendly blog posts in seconds using
            ChatGPT, Claude, Gemini, or a local LLM.
          </p>
          <Link href="generate/blogpost">
            <button className="px-6 py-3 bg-white text-[rgb(229,70,118)] font-bold rounded-lg shadow-md hover:bg-gray-100 transition dark:bg-gray-900 dark:text-pink-400 dark:hover:bg-gray-800">
              Start Writing
            </button>
          </Link>
        </div>
      </section>

      {/* How It Works Section */}
      <section
        className={`py-20 px-6 transition-colors duration-300 ${
          darkMode ? "bg-black text-white" : "bg-white text-gray-800"
        }`}
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            How to Use Our AI
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className={`p-6 border rounded-xl shadow-md hover:shadow-lg text-left transition ${cardStyle}`}
              >
                <div className="flex items-center mb-4">
                  {step.icon}
                  <h3 className="ml-3 text-lg font-semibold">{step.title}</h3>
                </div>
                <p className="text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section with Cards */}
      <section
        className={`py-20 px-6 transition-colors duration-300 ${
          darkMode ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-800"
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Use Our Blog Generator
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Powered by Top AI Models",
                desc: "Use OpenAI, Claude, Gemini, or your own local LLMs through Ollama.",
              },
              {
                title: "Fast & SEO-Ready",
                desc: "Generate publication-ready content with keywords and structure.",
              },
              {
                title: "Customizable",
                desc: "Set tone, length, keywords, and audience. Designed for all niches.",
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className={`border rounded-xl p-6 shadow-md hover:shadow-lg transition ${cardStyle}`}
              >
                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                <p className="text-base leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
