export default function StatsDisplay({ wpm, accuracy, timeLeft }) {
  return (
    <div className="flex justify-between mb-6">
      <div className="text-center">
        <p className="text-2xl font-bold text-purple-400 animate-glow">{wpm}</p>
        <p className="text-sm text-gray-400">WPM</p>
      </div>
      <div className="text-center">
        <p className="text-2xl font-bold text-blue-400 animate-glow">
          {accuracy}%
        </p>
        <p className="text-sm text-gray-400">Accuracy</p>
      </div>
      <div className="text-center">
        <p className="text-2xl font-bold text-green-400 animate-glow">
          {timeLeft}s
        </p>
        <p className="text-sm text-gray-400">Time</p>
      </div>
    </div>
  );
}
