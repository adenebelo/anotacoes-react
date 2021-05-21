import { useEffect, useState } from "react";
import uuid from "react-uuid";
import "./App.css";
import Principal from "./principal/Principal";
import BarraLateral from "./barraLateral/BarraLateral";

function App() { 
  const [notas, setNotas] = useState(
    localStorage.notas ? JSON.parse(localStorage.notas) : []
  );
  const [notaAtiva, setNotaAtiva] = useState(false);

  useEffect(() => {
    localStorage.setItem("notas", JSON.stringify(notas));
  }, [notas]);

  const adicionarNota = () => {
    const newNota = {
      id: uuid(), /* id aleatório */ 
      title: "",
      body: "",
      lastModified: Date.now(),
    };

    setNotas([newNota, ...notas]);
    setNotaAtiva(newNota.id);
  };

  const apagarNota = (notaId) => {
    setNotas(notas.filter(({ id }) => id !== notaId));
  };

  const atualizarNota = (notaAtualizada) => {
    const notaAtualizadaArr = notas.map((nota) => {
      if (nota.id === notaAtualizada.id) {
        return notaAtualizada;
      }

      return nota;
    });

    setNotas(notaAtualizadaArr);
  };

  const getNotaAtiva = () => {
    return notas.find(({ id }) => id === notaAtiva);
  };

  return (
    <div className="App">
      <BarraLateral
        notas={notas}
        adicionarNota={adicionarNota}
        apagarNota={apagarNota}
        notaAtiva={notaAtiva}
        setNotaAtiva={setNotaAtiva}
      />
      <Principal notaAtiva={getNotaAtiva()} atualizarNota={atualizarNota} />
    </div>
  );
}

export default App;