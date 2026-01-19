"use client"; 
import {useState} from "react";

export default function Home() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [input, setInput] = useState("");
  
  const addTask = () => {
    if (!input.trim()) return;
    setTasks([...tasks, input]);
    setInput("");
  }
   return (
  <main style={{ padding: "2rem" }}>
    <h1>Lista de tareas</h1>

    <input
      value={input}
      onChange={(e) => setInput(e.target.value)}
      placeholder="Escribe una tarea"
    />

    <button onClick={addTask}>Agregar</button>

    <ul>
      {tasks.map((task, index) => (
        <li key={index}>{task}</li>
      ))}
    </ul>
  </main>
);}