export default function ControlButtons({
  isTestRunning,
  startTest,
  resetTest,
  difficulty,
  setDifficulty,
}) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex space-x-3 mb-4">
        <button
          className={`px-5 py-2 rounded-lg font-semibold transition-all duration-300 ${
            isTestRunning
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 animate-glow"
          } text-white`}
          onClick={startTest}
          disabled={isTestRunning}
        >
          Start Test
        </button>
        <button
          className="px-5 py-2 bg-gradient-to-r from-gray-500 to-gray-700 hover:from-gray-600 hover:to-gray-800 text-white rounded-lg font-semibold transition-all duration-300 animate-glow"
          onClick={resetTest}
        >
          Reset
        </button>
      </div>
      <div className="flex space-x-3">
        <button
          className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
            difficulty === "easy"
              ? "bg-green-500 animate-glow"
              : "bg-gray-700 hover:bg-green-600"
          } text-white`}
          onClick={() => setDifficulty("easy")}
        >
          Easy
        </button>
        <button
          className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
            difficulty === "medium"
              ? "bg-yellow-500 animate-glow"
              : "bg-gray-700 hover:bg-yellow-600"
          } text-white`}
          onClick={() => setDifficulty("medium")}
        >
          Medium
        </button>
        <button
          className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
            difficulty === "hard"
              ? "bg-red-500 animate-glow"
              : "bg-gray-700 hover:bg-red-600"
          } text-white`}
          onClick={() => setDifficulty("hard")}
        >
          Hard
        </button>
      </div>
    </div>
  );
}
