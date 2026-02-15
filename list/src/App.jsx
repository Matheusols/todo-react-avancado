import Tarefa from "./components/Tarefa";
import { useInput } from "./hooks/useinput";
import { useTodos } from "./context/TodoContext";

function App() {

  const tarefa = useInput();
  const { tarefas, adicionar, setFiltro } = useTodos();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (tarefa.valor === '') return;

    adicionar(tarefa.valor);
    tarefa.limpar();
  };

  return (
    <main>
      <h1>To do list</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={tarefa.valor}
          onChange={tarefa.onChange}
        />
        <button type="submit">Adicionar</button>
      </form>

      <div className="filtros">
        <button onClick={() => setFiltro("todas")}>Todas</button>
        <button onClick={() => setFiltro("concluidas")}>Concluídas</button>
        <button onClick={() => setFiltro("pendentes")}>Pendentes</button>
      </div>

      <ul>
        {tarefas.map(t => (
          <Tarefa
            key={t.id}
            tarefa={t}
          />
        ))}
      </ul>
    </main>
  );
}

export default App;
