"use client";
import { useEffect, useRef } from "react";

export default function TypingGame() {
  const inputRef = useRef<HTMLInputElement>(null);
  const problem = "test";

  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-md p-8 flex flex-col items-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">{problem}</h1>
        <input
          ref={inputRef}
          type="text"
          placeholder="type here..."
          className="w-full max-w-md text-center text-lg p-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
}
