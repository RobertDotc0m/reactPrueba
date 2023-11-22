import React, { useState } from "react"; // Importa React y la función useState del paquete React.
import "bootstrap/dist/css/bootstrap.min.css"; // Importa los estilos CSS de Bootstrap.

import Buscador from "./componentes/Buscador"; // Importa el componente Buscador desde un archivo local.
import MiApi from "./componentes/MiApi"; // Importa el componente MiApi desde un archivo local.

function App() {
  // Define el componente funcional llamado App.

  const [info, setInfo] = useState([]); // Crea un estado 'info' para almacenar los datos de las cartas desde la API.
  const [Busqueda, setBusqueda] = useState([]); // Crea un estado 'Busqueda' para almacenar los resultados de búsqueda.

  return (
    <>
      {" "}
      {/* Abre un fragmento React para envolver varios elementos sin un div raíz. */}
      <header className="bg-black pt-5">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Magicthegathering-logo.svg/2560px-Magicthegathering-logo.svg.png"
          alt="header cartas magic"
          className="img-fluid"
        />
      </header>
      <nav className="bg-black pb-5">
        <h1 className="text-center pt-4 mb-4 text-white">
          Search for your destiny.
        </h1>
        <Buscador cards={info} setBusqueda={setBusqueda} />{" "}
        {/* Renderiza el componente Buscador y pasa las cartas y la función setBusqueda como propiedades. */}
      </nav>
      <main className="mt-5">
        <MiApi
          info={info}
          setInfo={setInfo}
          Busqueda={Busqueda}
          setBusqueda={setBusqueda}
        />{" "}
        {/* Renderiza el componente MiApi y pasa los estados 'setInfo' y 'setBusqueda' como propiedades. */}
      </main>
      <footer className="bg-black pt-5 pb-4">
        <p className="text-center text-white">2023. All rights reserved.</p>
      </footer>
    </>
  );
}
export default App; // Exporta el componente App como el componente principal de la aplicación.
