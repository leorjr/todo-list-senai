import { useState } from "react";
import "./index.css"

export const CardAdicionar = ({handleAdd}) => {
  const [text, setText] = useState("");

  return (
    <>
      <div>
        <input
          type="text"
          name="card"
          id="card"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Digite a tarefa aqui"
        />
        <button onClick={()=> handleAdd(text)}>adicionar</button>
      </div>
    </>
  );
};
