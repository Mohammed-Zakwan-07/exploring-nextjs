"use client";

import { useState, useEffect } from "react";

export default function Timer() {
  const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutes in seconds
  const [isActive, setIsActive] = useState(false);
  const [isBreak, setIsBreak] = useState(false);

  useEffect(() => {
    let timer;
    if (isActive && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
      setIsBreak(!isBreak);
      setTimeLeft(isBreak ? 25 * 60 : 5 * 60); // Switch between work and break
    }
    return () => clearInterval(timer);
  }, [isActive, timeLeft, isBreak]);

  const startPause = () => setIsActive(!isActive);
  const reset = () => {
    setIsActive(false);
    setIsBreak(false);
    setTimeLeft(25 * 60);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div className="text-center mb-6">
      <div className="text-4xl font-bold mb-4 text-green-600">
        {formatTime(timeLeft)}
      </div>
      <p className="text-gray-600 mb-4">
        {isBreak ? "Break Time" : "Work Time"}
      </p>
      <div className="space-x-4">
        <button
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          onClick={startPause}
        >
          {isActive ? "Pause" : "Start"}
        </button>
        <button
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
