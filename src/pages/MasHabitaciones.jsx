import Derechos from "../components/Derechos";
import Menu from "../components/Menu";
import { useEffect, useState } from "react";

const MasHabitaciones = () => {
  const [datos, setDatos] = useState([]); // Almacena los datos de las habitaciones
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/habitaciones")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al obtener las habitaciones");
        }
        return response.json();
      })
      .then((data) => {
        // Filtrar las habitaciones para que solo se muestren las habitaciones A-1, B-1, C-1, D-1, E-1 y F-1
        const habitacionesFiltradas = data.filter((habitacion) =>
          ["A-1", "B-1", "C-1", "D-1", "E-1", "F-1"].includes(habitacion.numero_habitacion)
        );
        setDatos(habitacionesFiltradas);
      })
      .catch((err) => {
        console.error(err);
        setError(
          "Hubo un error al obtener las habitaciones. Por favor, intenta de nuevo más tarde."
        );
      });
  }, []);

    return (
    <section>
        <Menu />
        <h1 className="mt-32 text-center font-cormorant font-light text-4xl text-gray-700 tracking-wider" >Nuestras Habitaciones</h1>
        <p className="mt-5 text-center font-inter text-gray-500  text-2xl " >Descubre el lujo y el confort en cada una de nuestras exclusivas habitaciones y suites</p>
        <div className="flex flex-col bg-slate-50 p-10 mt-8 mb-8 space-y-5 " >
            <p className="mt-5 text-center font-inter text-gray-900  text-xl " >Todas nuestras habitaciones incluyen:</p>
            <div className="flex justify-center space-x-14" >
                <p className="text-center text-xl text-gray-600" >🛋️ <br /> Mobiliario de lujo</p>
                <p className="text-center text-xl text-gray-600" >🌡️ <br /> Control climático</p>
                <p className="text-center text-xl text-gray-600" >📶 <br /> Wi-Fi de alta velocidad</p>
                <p className="text-center text-xl text-gray-600" >🛁 <br /> Amenidades premium</p>
            </div>
        </div>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <div className="flex flex-wrap justify-center gap-6 mb-10">
        {datos.map((habitacion, index) => (
          <div
            key={index}
            className="w-[28%] bg-white shadow-lg rounded-lg overflow-hidden hover:-translate-y-1 transform transition duration-500"
          >
            <img
              className="w-full h-64 object-cover"
              src={`/public/img/habitacion${habitacion.id}.avif`}
              alt={habitacion.nombre}
            />
            <div className="p-4">
              <h3 className="text-xl font-cormorant text-gray-800 mb-2">
                {habitacion.nombre}
              </h3>
              <p className="text-gray-600 text-lg font-inter mb-4">
                {habitacion.descripcion}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-inter font-light text-gray-800">
                  ${habitacion.precio}/noche
                </span>
                <a
                  href="#"
                  className="text-teal-500 font-semibold text-xl hover:underline"
                >
                  Ver Detalles →
                </a>
              </div>
            </div>
          </div>
        ))}
        </div>
        <Derechos />
    </section>
    );
  };  
  
  export default MasHabitaciones;