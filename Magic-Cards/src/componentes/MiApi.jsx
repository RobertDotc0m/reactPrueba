import React, { useEffect } from "react"; // Importa React y la función useEffect del paquete React.
import Card from "react-bootstrap/Card"; // Importa el componente Card de Bootstrap.
import "bootstrap/dist/css/bootstrap.min.css"; // Importa los estilos CSS de Bootstrap.

function MiApi({ setInfo, Busqueda, setBusqueda }) {
  // Define el componente funcional MiApi y recibe las propiedades 'setInfo' y 'setBusqueda'.

  useEffect(() => {
    // Usa useEffect para realizar efectos secundarios cuando el componente se monta.
    consultarApi(); // Llama a la función consultarApi al montar el componente.
  }, []); // El segundo argumento del useEffect (un arreglo vacío) indica que este efecto se ejecuta solo una vez al montar el componente.

  const consultarApi = async () => {
    // Define una función asincrónica llamada consultarApi.
    const url = "https://api.magicthegathering.io/v1/cards"; // URL de la API de Magic: The Gathering.
    const respuesta = await fetch(url); // Realiza una solicitud GET a la URL y espera la respuesta.
    const data = await respuesta.json(); // Convierte la respuesta en formato JSON.

    const cartasOrdenadas = data.cards.slice().sort((a, b) => {
      // Ordena las cartas alfabéticamente por nombre.
      return a.name.localeCompare(b.name, undefined, { sensitivity: "base" });
    });

    setInfo(cartasOrdenadas); // Actualiza el estado 'info' con las cartas ordenadas.
    setBusqueda(cartasOrdenadas); // Inicializa 'Busqueda' con todas las cartas ordenadas.
  };

  return (
    <>
      {" "}
      {/* Abre un fragmento React para envolver varios elementos sin un div raíz. */}
      <div className="d-flex flex-wrap justify-content-center gap-5 mb-5">
        {Busqueda.map(
          (
            tarjeta,
            index // Mapea y muestra cada tarjeta en 'Busqueda'.
          ) =>
            tarjeta.imageUrl && ( // Si hay una URL de imagen, muestra la tarjeta.
              <Card
                key={index}
                style={{ width: "16rem" }}
                className="shadow-lg zoom transition"
              >
                <Card.Img
                  variant="top"
                  src={tarjeta.imageUrl}
                  alt={tarjeta.name}
                  className="card-image"
                />
                <Card.Body>
                  <Card.Title className="mb-3">{tarjeta.name}</Card.Title>
                  <Card.Text>
                    <strong>Rarity:</strong> {tarjeta.rarity}.
                  </Card.Text>
                  <Card.Text>
                    <strong>Artist:</strong> {tarjeta.artist}.
                  </Card.Text>
                </Card.Body>
              </Card>
            )
        )}
      </div>
    </>
  );
}

export default MiApi; // Exporta el componente MiApi.
