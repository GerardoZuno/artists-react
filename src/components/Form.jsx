import React, { useState } from "react";

function Form({setLetterSearch}) {
  const [search, setSearch] = useState({
    artista: "",
    cancion: "",
  });
  const { artista, cancion } = search;

  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!artista.trim() || !cancion.trim()) {
      setError(true);
      return;
    }
    setError(false);
    setLetterSearch(search)
  };

  return (
    <div className="bg-info">
        {error && (
            <p className="alert alert-danger text-center p-3">
              Todos los campos son obligatorios
            </p>
          )}
      <div className="container">
        <div className="row">
          
          <form
            className="col card text-white bg-transparent mb-5 pt-5 pb-2"
            onSubmit={handleSubmit}
          >
            <fieldset>
              <legend className="text-center">Buscador Letras Canciones</legend>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Artista</label>
                    <input
                      type="text"
                      className="form-control"
                      name="artista"
                      placeholder="Nombre Artista"
                      onChange={handleChange}
                      value={artista}
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label>Cancion</label>
                    <input
                      type="text"
                      className="form-control"
                      name="cancion"
                      placeholder="Nombre Cancion"
                      onChange={handleChange}
                      value={cancion}
                    />
                  </div>
                </div>
              </div>

              <button type="submit" className="btn  btn-primary float-right">
                Buscar
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
