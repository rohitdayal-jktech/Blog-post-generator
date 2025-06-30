"use client";

import Image from "next/image";
import { useTheme } from "../contexts/ThemeContext";

export default function Card() {
  const { darkMode } = useTheme();

  return (
    <div
      className={`max-w-sm rounded overflow-hidden shadow-lg transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"
      }`}
    >
      <Image
        className="w-full"
        src="/pexels-philippedonn-1133957.jpg"
        alt="Card image"
        width={400}
        height={200}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Card Title</div>
        <p className="text-base">
          This is a simple card built with Tailwind CSS.
        </p>

        <button className="bg-transparent hover:bg-[rgb(229,70,118)] text-[rgb(229,70,118)] font-semibold hover:text-white py-1 px-3 mt-4 border border-[rgb(229,70,118)] hover:border-transparent rounded">
          Explore
        </button>
      </div>
    </div>
  );
}
