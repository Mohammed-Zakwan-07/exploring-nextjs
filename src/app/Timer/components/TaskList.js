"use client";

import { useState } from "react";

export default function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, input]);
      setInput("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") addTask();
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="mb-4">
      <div className="flex mb-2">
        <input
          className="w-full p-2 border rounded-l text-gray-700"
          placeholder="Add a task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-r hover:bg-blue-600"
          onClick={addTask}
        >
          Add
        </button>
      </div>
      <ul className="list-disc pl-5 text-gray-700">
        {tasks.map((task, index) => (
          <li key={index} className="mb-1 flex justify-between">
            {task}
            <button
              className="ml-2 text-red-500 hover:text-red-700"
              onClick={() => removeTask(index)}
            >
              ×
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
