"use client";
import { ChangeEvent, useCallback, useEffect, useRef, useState } from "react";
import { problemList, timeoutForProblem } from "./const";

export default function TypingGame() {
  const [input, setInput] = useState("");
  const [problem, setProblem] = useState("");
  const [problemTimer, setProblemTimer] = useState(timeoutForProblem);
  const problemTimerRef = useRef<NodeJS.Timeout | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const startProblem = useCallback(() => {
    setInput("");
    const randomIndex = Math.floor(Math.random() * problemList.length);
    setProblem(problemList[randomIndex]);
    if (problemTimerRef.current) {
      clearInterval(problemTimerRef.current);
    }
    problemTimerRef.current = setInterval(() => {
      setProblemTimer((prev) => prev - 1);
    }, timeoutForProblem * 1000);
  }, []);

  const handleOnChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setInput(e.target.value);
      if (e.target.value === problem) {
        console.log("Correct!");
        if (inputRef.current) {
          startProblem();
        }
      }
    },
    [problem, startProblem],
  );

  useEffect(() => {
    startProblem();
    inputRef.current?.focus();

    return () => {
      if (problemTimerRef.current) {
        clearInterval(problemTimerRef.current);
      }
    };
  }, [startProblem]);

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
