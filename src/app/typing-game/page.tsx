"use client";
import { ChangeEvent, useCallback, useEffect, useRef, useState } from "react";
import { problemList } from "./const";

export default function TypingGame() {
  const [input, setInput] = useState("");
  const [problem, setProblem] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const pickProblem = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * problemList.length);
    return problemList[randomIndex];
  }, []);

  const handleOnChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setInput(e.target.value);
      if (e.target.value === problem) {
        console.log("Correct!");
        if (inputRef.current) {
          setProblem(pickProblem());
          setInput("");
        }
      }
    },
    [problem, pickProblem],
  );

  useEffect(() => {
    setProblem(pickProblem());
    inputRef.current?.focus();
  }, [pickProblem]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-md p-8 flex flex-col items-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">{problem}</h1>
        <input
          ref={inputRef}
          type="text"
          value={input}
          placeholder="type here..."
          className="w-full max-w-md text-center text-lg p-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => handleOnChange(e)}
        />
      </div>
    </div>
  );
}
