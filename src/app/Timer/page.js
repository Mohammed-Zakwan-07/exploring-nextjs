import Timer from "./components/Timer";
import TaskList from "./components/TaskList";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-blue-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-4 text-green-600">
          Pomodoro Focus
        </h1>
        <p className="text-center text-gray-600 mb-6">
          Stay productive with 25-min work & 5-min breaks!
        </p>
        <Timer />
        <TaskList />
      </div>
    </div>
  );
}
