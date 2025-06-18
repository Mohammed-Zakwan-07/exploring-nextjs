import Timer from "./components/Timer";
import TaskList from "./components/TaskList";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-blue-100 dark:bg-gradient-to-bl dark:from-zinc-300 dark:to-zinc-700">
      <div className="bg-white dark:bg-blue-950 p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-4 text-green-600 dark:text-white">
          Pomodoro Focus
        </h1>
        <p className="text-center text-gray-600 mb-6 dark:text-gray-100">
          Stay productive with 25-min work & 5-min breaks!
        </p>
        <Timer />
        <TaskList />
      </div>
    </div>
  );
}
