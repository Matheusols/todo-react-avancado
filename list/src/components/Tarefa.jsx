import React from "react";
import { useTodos } from "../context/TodoContext";
import './tarefa.css';

function Tarefa({ tarefa }) {

    const { alternar, remover } = useTodos();

    console.log("Renderizou:", tarefa.texto);

    return (
        <li>
            <input
                type="checkbox"
                checked={tarefa.concluida}
                onChange={() => alternar(tarefa.id)}
            />

            <span className={tarefa.concluida ? 'concluida' : ''}>
                {tarefa.texto}
            </span>

            <button onClick={() => remover(tarefa.id)}>
                X
            </button>
        </li>
    );
}

export default React.memo(Tarefa);
