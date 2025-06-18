"use client";

import { useState, useEffect } from "react";
import StatsDisplay from "./StatsDisplay";
import ControlButtons from "./ControlButtons";

const texts = [
  "In a world where technology evolves rapidly, mastering touch typing can significantly boost your productivity.",
  "The galaxy shimmered with a thousand stars, each whispering secrets of the universe to those who dared to listen.",
  "Code flows like a river, carving paths through the digital landscape with precision and elegance.",
];

export default function TypingTest() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [inputText, setInputText] = useState("");
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [isTestRunning, setIsTestRunning] = useState(false);
  const [difficulty, setDifficulty] = useState("medium");
  const [cursorPosition, setCursorPosition] = useState(0);

  const sampleText = texts[currentTextIndex];

  useEffect(() => {
    let timer;
    if (isTestRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      endTest();
    }
    return () => clearInterval(timer);
  }, [isTestRunning, timeLeft]);

  useEffect(() => {
    if (inputText === sampleText && isTestRunning) {
      setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      setInputText("");
      setCursorPosition(0);
      calculateResults();
    } else {
      setCursorPosition(inputText.length);
    }
  }, [inputText, sampleText, isTestRunning]);

  const startTest = () => {
    setIsTestRunning(true);
    setInputText("");
    setWpm(0);
    setAccuracy(0);
    setTimeLeft(60);
    setCurrentTextIndex(0);
    setCursorPosition(0);
  };

  const resetTest = () => {
    setIsTestRunning(false);
    setInputText("");
    setWpm(0);
    setAccuracy(0);
    setTimeLeft(60);
    setCurrentTextIndex(0);
    setCursorPosition(0);
  };

  const endTest = () => {
    setIsTestRunning(false);
    calculateResults();
  };

  const calculateResults = () => {
    const wordsTyped = inputText.trim().split(/\s+/).length;
    const totalChars = inputText.length;
    const correctChars = sampleText
      .slice(0, totalChars)
      .split("")
      .filter((char, i) => char === inputText[i]).length;

    setWpm(Math.round((wordsTyped / (60 - timeLeft)) * 60));
    setAccuracy(
      totalChars > 0 ? Math.round((correctChars / totalChars) * 100) : 0
    );
  };

  const handleInputChange = (e) => {
    if (!isTestRunning) return;
    const value = e.target.value;
    setInputText(value);
    calculateResults();
  };

  return (
    <div className="bg-gray-900 bg-opacity-80 p-8 rounded-xl shadow-2xl w-full max-w-lg border border-purple-500">
      <h1 className="text-3xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 animate-pulse">
        Cyber Typing Arena
      </h1>
      <p className="text-center text-gray-300 mb-4">
        Unleash your typing speed in this futuristic challenge!
      </p>

      <StatsDisplay wpm={wpm} accuracy={accuracy} timeLeft={timeLeft} />

      <div className="relative text-gray-300 mb-4 font-mono">
        {sampleText.split("").map((char, index) => (
          <span
            key={index}
            className={`${
              index < inputText.length
                ? inputText[index] === char
                  ? "text-green-400"
                  : "text-red-400"
                : "text-gray-400"
            }`}
          >
            {char}
            {index === cursorPosition - 1 && inputText.length > 0 && (
              <span className="absolute text-green-400 animate-blink">|</span>
            )}
          </span>
        ))}
        {cursorPosition === 0 && inputText.length === 0 && (
          <span className="absolute text-green-400 animate-blink">|</span>
        )}
      </div>

      <textarea
        className="w-full p-2 bg-gray-800 text-white border border-purple-500 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-purple-400"
        placeholder="Start typing to begin the challenge..."
        value={inputText}
        onChange={handleInputChange}
        disabled={!isTestRunning}
      />

      <ControlButtons
        isTestRunning={isTestRunning}
        startTest={startTest}
        resetTest={resetTest}
        difficulty={difficulty}
        setDifficulty={setDifficulty}
      />
    </div>
  );
}
