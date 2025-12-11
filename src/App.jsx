import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w[500px] bg-slate-700 rounded-lg p-6">
        <h1 className="text-slate-100 font-bold text-center text-3xl">
          Gerenciador de Tarefas - inicial
        </h1>
        <AddTask />
        <Tasks />
      </div>
    </div>
  );
}

export default App;
