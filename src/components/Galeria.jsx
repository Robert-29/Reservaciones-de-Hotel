import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Galeria = () => {
  return (
    <section className="flex justify-center items-center p-20 flex-col space-y-20">
      <h2 className="font-cormorant font-light tracking-wider text-gray-700 text-4xl">Galería</h2>
      <div className="w-[80%] h-[550px] rounded-2xl shadow-lg overflow-hidden relative">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0} // Espacio entre slides
          slidesPerView={1} // Cantidad de slides visibles
          loop={true}
          autoplay={{ delay: 8000, disableOnInteraction: true }} // Autoplay cada 8 segundos
          navigation={{ // Botones de navegación
            nextEl: ".custom-next",// Clase personalizada para el botón siguiente
            prevEl: ".custom-prev",// Clase personalizada para el botón anterior
          }}
          pagination={{ clickable: true }} // Índice clickable
          className="h-full"
        >
          <SwiperSlide>
            <img
              src="/public/img/fondo-hotel.avif"
              alt="Slide 1"
              className="w-full h-full object-cover"
              loading="lazy" // Carga diferida
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/public/img/habitacion1.avif"
              alt="Slide 2"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/public/img/habitacion2.avif"
              alt="Slide 3"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/public/img/lobby.avif"
              alt="Slide 1"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </SwiperSlide>
        </Swiper>

        {/* Botones personalizados */}
        <button className=" custom-prev absolute left-4 top-1/2 transform -translate-y-1/2 z-50">
          <img src="/src/assets/svg/left.svg" alt="Flecha izquierda" className="w-10 h-10" />
        </button>
        <button className="custom-next absolute right-4 top-1/2 transform -translate-y-1/2 z-50">
          <img src="/src/assets/svg/right.svg" alt="Flecha derecha" className="w-10 h-10" />
        </button>

        {/* Estilos personalizados */}
        <style>
          {`
            /* -----Ocultar botones originales----- */
            .swiper-button-next,
            .swiper-button-prev {
              display: none !important;
            }

            /* -----Personalización del índice----- */
            .swiper-pagination-bullet {
              background-color: #d1d5db;
              opacity: 0.7;
            }
            .swiper-pagination-bullet-active { /* Índice activo, cambia el color del indíce */
              background-color: white;
              transform: scale(1.2);
            }
          `}
        </style>
      </div>
    </section>
  );
};

export default Galeria;
