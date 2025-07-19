"use client";
import { ChangeEvent, useCallback, useEffect, useRef, useState } from "react";
import { problemList, timeoutForProblem } from "./const";

export default function TypingGame() {
  const [input, setInput] = useState("");
  const [problem, setProblem] = useState("");
  const [problemTimer, setProblemTimer] = useState(timeoutForProblem);
  const inputRef = useRef<HTMLInputElement>(null);

  const startProblem = useCallback(() => {
    setInput("");
    const randomIndex = Math.floor(Math.random() * problemList.length);
    setProblem(problemList[randomIndex]);
    setProblemTimer(timeoutForProblem);
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
    if (problemTimer < 0 || problem === "") {
      startProblem();
    }
    inputRef.current?.focus();
  }, [startProblem, problemTimer, problem]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setProblemTimer((prev) => prev - 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-md p-8 flex flex-col items-center">
        <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden mb-4">
          <div
            className="h-full bg-blue-500 transition-all duration-1000"
            style={{
              width: `${(problemTimer / timeoutForProblem) * 100}%`,
            }}
          />
        </div>
        <h1 className="text-4xl font-bold text-blue-700">{problemTimer}</h1>
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
