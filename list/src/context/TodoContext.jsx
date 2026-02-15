import { createContext, useContext, useState, useMemo } from "react";

const TodoContext = createContext();

export function TodoProvider({ children }) {
    const [tarefas, setTarefas] = useState([]);
    const [filtro, setFiltro] = useState("todas");

    function adicionar(texto) {
        const nova = {
            id: crypto.randomUUID(),
            texto,
            concluida: false
        };

        setTarefas(prev => [...prev, nova]);
    }

    function alternar(id) {
        setTarefas(prev =>
            prev.map(t =>
                t.id === id ? { ...t, concluida: !t.concluida } : t
            )
        );
    }

    function remover(id) {
        setTarefas(prev => prev.filter(t => t.id !== id));
    }

    const tarefasFiltradas = useMemo(() => {
        if (filtro === "concluidas")
            return tarefas.filter(t => t.concluida);
        if (filtro === "pendentes")
            return tarefas.filter(t => !t.concluida);
        return tarefas;
    }, [tarefas, filtro]);

    return (
        <TodoContext.Provider
            value={{
                tarefas: tarefasFiltradas,
                adicionar,
                alternar,
                remover,
                setFiltro,
                filtro
            }}
        >
            {children}
        </TodoContext.Provider>
    );
}

export function useTodos() {
    return useContext(TodoContext);
}
