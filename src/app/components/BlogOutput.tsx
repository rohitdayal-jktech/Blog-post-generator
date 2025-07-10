"use client";
import React, { useRef, useState } from "react";

export default function BlogOutput({ output }: { output: string }) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [buttonText, setButtonText] = useState("Copy");

  const handleCopy = async () => {
    if (contentRef.current) {
      const textToCopy = contentRef.current.innerText;
      try {
        await navigator.clipboard.writeText(textToCopy);
        setButtonText("Copied!");
      } catch (error) {
        console.error("Failed to copy text: ", error);
      }
    }
  };

  return (
    <>
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Blog Post
        </h2>
        {output && (
          <button
            onClick={handleCopy}
            className="bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700"
          >
            {buttonText}
          </button>
        )}
      </div>

      <div className="mt-6 p-4 border rounded bg-white dark:bg-gray-800 dark:text-white">
        {output ? (
          <div
            ref={contentRef}
            className="prose dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: output }}
          />
        ) : (
          "Your generated blog will appear here."
        )}
      </div>
    </>
  );
}
