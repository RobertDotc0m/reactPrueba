import React, { useState } from "react"; // Importa React y la función useState del paquete React.

const Buscador = ({ cards, setBusqueda }) => {
  // Define el componente funcional Buscador y recibe las propiedades 'cards' y 'setBusqueda'.

  const [palabraBuscada, setPalabraBuscada] = useState(""); // Crea un estado 'palabraBuscada' para almacenar el término de búsqueda.

  const handleSearch = () => {
    // Define una función llamada handleSearch para manejar la búsqueda.
    const resultados = cards.filter((tarjeta) => {
      // Filtra las cartas basadas en el término de búsqueda.
      const nombre = tarjeta.name
        .toLowerCase()
        .includes(palabraBuscada.toLowerCase());
      const artista = tarjeta.artist
        .toLowerCase()
        .includes(palabraBuscada.toLowerCase());
      const rareza = tarjeta.rarity
        .toLowerCase()
        .includes(palabraBuscada.toLowerCase());

      return nombre || artista || rareza; // Devuelve true si hay coincidencia en nombre, artista o rareza.
    });

    setBusqueda(resultados); // Actualiza los resultados de búsqueda en App.jsx.
  };

  const handleReset = () => {
    // Define una función llamada handleReset para reiniciar la búsqueda.
    setPalabraBuscada(""); // Restablece el término de búsqueda a una cadena vacía.
    setBusqueda(cards); // Muestra todas las cartas restableciendo los resultados de búsqueda en App.jsx.
  };

  return (
    <div className="d-flex justify-content-center mb-4 gap-2">
      <input
        type="text"
        className="form-control-lg"
        placeholder="name, rarity or artist"
        value={palabraBuscada}
        onChange={(e) => setPalabraBuscada(e.target.value)} // Maneja los cambios en el input y actualiza el estado 'palabraBuscada'.
      />
      <button className="btn btn-primary p-2" onClick={handleSearch}>
        {" "}
        {/* Botón para realizar la búsqueda. */}
        Search
      </button>
      <button className="btn btn-secondary p-2" onClick={handleReset}>
        {" "}
        {/* Botón para reiniciar la búsqueda. */}
        Reset
      </button>
    </div>
  );
};

export default Buscador; // Exporta el componente Buscador.
