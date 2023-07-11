import {useState } from "react";
import { CardAdicionar } from "./components/CardAdicionar";
import { ListItem } from "./components/ListItem";
import "./App.css"

function App() {
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(1);

  const createTodo = (textTodo) => {
    const newTodo = {
      id: count,
      texto: textTodo,
      finalizado: false,
    };

    setTodos((todos) => [...todos, newTodo]);
    setCount((count) => count + 1);
  };

  const finalizarTask = (id) => {
    const item = todos.find((todo) => todo.id == id);

    const todosFiltered = todos.filter((todo) => todo.id != id);

    item.finalizado = !item.finalizado;

    todosFiltered.push(item);

    todosFiltered.sort((a, b) => {
      return a.id < b.id ? -1 : a.id > b.id ? 1 : 0;
    });

    setTodos(todosFiltered);
  };

  const removerTarefa = (id) => {
    const tarefasFiltradas = todos.filter((todo) => todo.id != id);

    setTodos(tarefasFiltradas);
  };

  return (
    <>
     <main>
      <h1>Lista de Tarefas</h1>
      <CardAdicionar handleAdd={createTodo} />
        <ul>
          {todos.map((item) => {
            return (
              <ListItem
                todo={item}
                finalizarTask={finalizarTask}
                removerTarefa={removerTarefa}
                key={item.id}
              />
            );
          })}
        </ul>
     </main>
    </>
  );
}

export default App;
