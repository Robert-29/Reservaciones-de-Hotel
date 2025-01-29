import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

const Habitaciones = () => {
  const [datos, setDatos] = useState([]); // Almacena los datos de las habitaciones
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    fetch("http://localhost:3000/habitaciones")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al obtener las habitaciones");
        }
        return response.json();
      })
      .then((data) => {
        // Filtrar las habitaciones para que solo se muestren las habitaciones A-1, B-1 y C-1
        const habitacionesFiltradas = data.filter((habitacion) =>
          ["A-1", "B-1", "C-1"].includes(habitacion.numero_habitacion)
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
    <div className="pt-20 px-8">
      <h1 className="font-cormorant text-4xl text-center tracking-wider text-gray-800 mb-8">
        Nuestras Habitaciones
      </h1>
      {error && <p className="text-red-500 text-center">{error}</p>}

      <div className="flex flex-wrap justify-center gap-6">
        {datos.map((habitacion, index) => (
          <div
            key={index}
            className="w-[28%] bg-white shadow-lg rounded-lg overflow-hidden hover:-translate-y-1 transform transition duration-500"
          >
            <img
              className="w-full h-64 object-cover"
              src={`/public/img/habitacion${habitacion.id}.avif`} // Carga imagen local
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
                <a href="" className="text-teal-500 font-semibold text-xl hover:underline">
                  <button onClick={() => {handleSeleccionarHabitacion(habitacion.id)}} className="focus:outline-none">Ver Detalles</button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <a
          className="text-3xl font-cormorant text-gray-800 hover:border-b-gray-600 hover:border-b-2 cursor-pointer"
        >
          Ver más habitaciones →
        </a>
      </div>
    </div>
  );
};

export default Habitaciones;
