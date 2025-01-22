import { useEffect, useState } from "react";
import Menu from "../components/Menu";
import Servicios from "../components/Servicios";
import Habitaciones from "../components/Habitaciones";
import Ofertas from "../components/Ofertas";
import Galeria from "../components/Galeria";
import Experiancias from "../components/Experiencias";
import Contactar from "../components/Contactar";
import Derechos from "../components/derechos";

const Home = () => {
  const frases = [
    "tranquilidad",
    "vistas al mar",
    "buffet exquisito",
    "lujo y confort",
    "aventuras",
    "experiencia única",
    "relajación",
  ];

  const [indiceActual, setIndiceActual] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndiceActual((indicePrevio) => (indicePrevio + 1) % frases.length);
    }, 3000); // Cambia cada 3 segundos

    return () => clearInterval(intervalo); // Limpia el intervalo al desmontar
  }, [frases.length]);

  return (
    <div className="">
      <Menu />
      <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url('/img/fondo-hotel.avif')` }}>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-4">
          <h1 className="text-7xl font-cormorant tracking-wider">
            EN <br /> CRYSTAL COVE <br /> ENCUENTRA
          </h1>
          <span className="text-7xl font-cormorant font-light text-white uppercase mt-4 ">
            {frases[indiceActual]}
          </span>
        </div>
      </div>
      <Servicios />
      <Habitaciones />
      <Ofertas />
      <Galeria />
      <Experiancias />
      <Contactar />
      <Derechos />
    </div>
  );
};

export default Home;