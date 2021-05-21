const Principal = ({ notaAtiva, atualizarNota }) => {
  const onEditField = (field, value) => {
    atualizarNota({
      ...notaAtiva,
      [field]: value,
      lastModified: Date.now(),
    });
  };

  if (!notaAtiva) return <div className="no-active-note"></div>;

  return (
    <div className="app-principal">
      <div className="app-principal-note-edit">
        <input
          type="text"
          id="title"
          placeholder="Título"
          value={notaAtiva.title}
          onChange={(e) => onEditField("title", e.target.value)}
          autoFocus
        />
        <textarea
          id="body"
          placeholder="Escreva aqui..."
          value={notaAtiva.body}
          onChange={(e) => onEditField("body", e.target.value)}
        />
      </div>
      
    </div>
  );
};

export default Principal;