import Derechos from "../components/derechos.jsx";
import Menu from "../components/Menu";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

const MasHabitaciones = () => {
  const [datos, setDatos] = useState([]); // Almacena los datos de las habitaciones
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://reservaciones-de-hotel-production.up.railway.app/habitaciones")
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

  const handleSeleccionarHabitacion = (id) => {
    navigate(`/reservar/${id}`);
  };

  return (
    <section>
      <Menu />
      <h1 className="mt-32 text-center font-cormorant font-light text-3xl md:text-4xl text-gray-700 tracking-wider px-4">Nuestras Habitaciones</h1>
      <p className="mt-5 text-center font-inter text-gray-500 text-lg md:text-2xl px-4">Descubre el lujo y el confort en cada una de nuestras exclusivas habitaciones y suites</p>
      <div className="flex flex-col bg-slate-50 p-6 md:p-10 mt-8 mb-8 space-y-5 " >
        <p className="mt-5 text-center font-inter text-gray-900 text-lg md:text-xl " >Todas nuestras habitaciones incluyen:</p>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-14" >
          <p className="text-center text-lg md:text-xl text-gray-600" >🛋️ <br /> Mobiliario de lujo</p>
          <p className="text-center text-lg md:text-xl text-gray-600" >🌡️ <br /> Control climático</p>
          <p className="text-center text-lg md:text-xl text-gray-600" >📶 <br /> Wi-Fi de alta velocidad</p>
          <p className="text-center text-lg md:text-xl text-gray-600" >🛁 <br /> Amenidades premium</p>
        </div>
      </div>
      {error && <p className="text-red-500 text-center">{error}</p>}
      <div className="flex flex-wrap justify-center gap-6 mb-10 px-4 md:px-0">
        {datos.map((habitacion, index) => (
          <div
            key={index}
            className="w-full sm:w-[80%] md:w-[45%] lg:w-[28%] bg-white shadow-lg rounded-lg overflow-hidden hover:-translate-y-1 transform transition duration-500"
          >
            <img
              className="w-full h-64 object-cover"
              src={`/img/habitacion${index + 1}.avif`}
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
                <span className="text-lg md:text-2xl font-inter font-light text-gray-800">
                  ${habitacion.precio}/noche
                </span>
                <button
                  onClick={() => { handleSeleccionarHabitacion(habitacion.id) }}
                  className="text-teal-500 font-semibold text-lg md:text-xl hover:underline"
                >
                  Ver Detalles →
                </button>
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