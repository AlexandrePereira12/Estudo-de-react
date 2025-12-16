import { useState } from "react";

import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar React",
      description: "Pengas",
      isCompleted: false,
    },
    { id: 2, title: "Fazer compras", description: "Pengas", isCompleted: true },
    { id: 3, title: "Ler um livro", description: "Pengas", isCompleted: false },
  ]);
  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w[500px] bg-slate-700 rounded-lg p-6">
        <h1 className="text-slate-100 font-bold text-center text-3xl">
          Gerenciador de Tarefas - inicial pengas
        </h1>
        <AddTask />
        <Tasks tasks={tasks} />
      </div>
    </div>
  );
}

export default App;
