"use client"; 
import {useState} from "react";

export default function Home() {
  const [tasks, setTasks] = useState<{id:Number, text:string}[]>([]);
  const [input, setInput] = useState("");
  
  const addTask = () => {
    if (!input.trim()) return;
    setTasks([...tasks,{id:Date.now(), text:input}]);
    setInput("");
    const handleKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        addTask();
      }
      const deleteTask = (id: Number) => {
        setTasks(tasks.filter((task) => task.id !== id));
      }
  }
  return (
  <main className="container">
    <h1> Lista de Tareas </h1>

    <div className="input-group">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Escribe una tarea y presiona Enter"
      />
      <button onClick={addTask}>Agregar</button>
    </div>

    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <span>{task.text}</span>
          <button onClick={() => deleteTask(task.id)}>X</button>
        </li>
      ))}
    </ul>
  </main>
);}}