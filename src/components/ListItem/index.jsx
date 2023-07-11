import "./index.css";

export const ListItem = ({ todo, finalizarTask, removerTarefa }) => {
  return (
    <>
      <li>
        <p>{todo.texto}</p>
        <div>
          <button
            disabled={todo.finalizado}
            id="adicionar"
            onClick={() => finalizarTask(todo.id)}
          >
            {todo.finalizado ? "finalizado" : "finalizar"}
          </button>
          <button id="remover" onClick={() => removerTarefa(todo.id)}>
            remover
          </button>
        </div>
      </li>
    </>
  );
};
