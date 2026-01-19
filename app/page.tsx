"use client";

import { useState } from "react";

export default function Home() {
  
  const [tasks, setTasks] = useState<string[]>([]);
  const [input, setInput] = useState("");
  
  const addTask = () => {
    if (input.trim() === "") return;
    setTasks([...tasks, input]);
    setInput("");
  };
  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addTask();
    }
  };

  const deleteTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <main>
      <h1>Lista de Tareas</h1>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Escribe una tarea y presiona Enter"
      />

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => deleteTask(index)}> X </button>
          </li>
        ))}
      </ul>
    </main>
  );
}