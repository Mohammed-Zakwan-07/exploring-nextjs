"use client";
import { useState, useEffect } from "react";

export default function Timer({ isRunning, startTime, endTime }) {
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval;

    if (isRunning && startTime) {
      interval = setInterval(() => {
        setTime(Math.floor((Date.now() - startTime) / 1000));
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning, startTime]);

  useEffect(() => {
    if (!isRunning && endTime && startTime) {
      const total = Math.floor((endTime - startTime) / 1000);
      setTime(total);
    }
  }, [endTime, startTime, isRunning]);

  return (
    <div className="text-lg text-zinc-600">
      ⏱️ Time: <span className="font-bold">{time}</span> seconds
    </div>
  );
}
