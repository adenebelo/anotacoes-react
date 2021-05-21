const BarraLateral = ({ /* Desestruturação */
    notas,
    adicionarNota,
    apagarNota,
    notaAtiva,
    setNotaAtiva,
  }) => {
    const sortedNotes = notas.sort((a, b) => b.lastModified - a.lastModified);

    return (
      <div className="app-barralateral">
        <div className="app-barralateral-header">
          <h1>Anotações</h1>
          <button onClick={adicionarNota}>Nova nota</button>
      </div>
        <div className="app-barralateral-notas">
          {sortedNotes.map(({ id, title, body, lastModified }, i) => (
            <div
              className={`app-barralateral-nota ${id === notaAtiva && "active"}`}
              onClick={() => setNotaAtiva(id)}
            >
              <div className="barralateral-titulo-nota">
                <strong>{title}</strong>
                <button onClick={(e) => apagarNota(id)}>Apagar</button>
              </div>
  
              <p>{body && body.substr(0, 100) + "..."}</p>
              
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default BarraLateral;