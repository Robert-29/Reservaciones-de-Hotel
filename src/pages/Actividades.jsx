import Derechos from "../components/derechos";
import Menu from "../components/Menu";

const Actividades = () => {
    return (
      <>   
      <Menu/> 
      <div className="pt-20 px-8 mt-10">
        <h1 className="font-cormorant text-5xl text-center tracking-wider text-gray-800 mb-8">
          Actividades y Experiencias
        </h1>
        <div data-aos="fade-up" data-aos-delay="100" className="flex flex-col items-center justify-center gap-6">
            <div className="w-[90%] flex bg-gray-50 rounded-lg overflow-hidden mb-5">
              <img className="w-[45%] object-cover" src="/public/img/actividad1.avif" alt="Suite Ejecutiva"/>
              <div className="p-14 flex flex-col space-y-5 justify-center ">
                <div className="flex space-x-3 items-center" >
                  <article className="bg-white rounded-full p-4" >
                    <img className="h-8" src="/src/assets/svg/luna.svg" alt="" />
                  </article>
                  <h3 className="font-cormorant text-2xl tracking-wider " >Cenas Privadas a la Luz de la Luna</h3>
                </div>
                <p className="font-inter text-gray-600 px-10 text-md" >Disfruta de una experiencia gastronómica única bajo el cielo estrellado, con un servicio personalizado y un menú exclusivo.</p>
              </div>
            </div>
            
            <div data-aos="fade-up" data-aos-delay="100" className="w-[90%] flex bg-gray-50 rounded-lg overflow-hidden mb-5">
              <img className="w-[45%] object-cover" src="/public/img/actividad2.avif" alt="Suite Ejecutiva"/>
              <div className="p-14 flex flex-col space-y-5 justify-center ">
                <div className="flex space-x-3 items-center" >
                  <article className="bg-white rounded-full p-4" >
                    <img className="h-8" src="/src/assets/svg/acuatico.svg" alt="" />
                  </article>
                  <h3 className="font-cormorant text-2xl tracking-wider " >Buseo</h3>
                </div>
                <p className="font-inter text-gray-600 px-10 text-md" >Vive la emoción de deslizarte sobre las aguas mientras disfrutas de vistas panorámicas incomparables.</p>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="100" className="w-[90%] flex bg-gray-50 rounded-lg overflow-hidden mb-5">
              <img className="w-[45%] object-cover" src="/public/img/actividad3.avif" alt="Suite Ejecutiva"/>
              <div className="p-14 flex flex-col space-y-5 justify-center">
                <div className="flex space-x-3 items-center" >
                  <article className="bg-white rounded-full p-4" >
                    <img className="h-8" src="/src/assets/svg/mancuerna.svg" alt="" />
                  </article>
                  <h3 className="font-cormorant text-2xl tracking-wider " >Gimnasio</h3>
                </div>
                <p className="font-inter text-gray-600 px-10 text-md" >Mantén tu rutina de ejercicios en nuestro gimnasio completamente equipado, abierto las 24 horas.</p>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="300" className="w-[90%] flex bg-gray-50 rounded-lg overflow-hidden mb-5">
              <img className="w-[45%] object-cover" src="/public/img/actividad4.avif" alt="Suite Ejecutiva"/>
              <div className="p-14 flex flex-col space-y-5 justify-center">
                <div className="flex space-x-3 items-center" >
                  <article className="bg-white rounded-full p-4" >
                    <img className="h-8" src="/src/assets/svg/spa.svg" alt="" />
                  </article>
                  <h3 className="font-cormorant text-2xl tracking-wider " >Spa y Bienestar</h3>
                </div>
                <p className="font-inter text-gray-600 px-10 text-md" >Relájate y rejuvenece en nuestro spa de clase mundial con tratamientos exclusivos y terapias holísticas.</p>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="300" className="w-[90%]  flex bg-gray-50 rounded-lg overflow-hidden mb-5">
              <img className="w-[45%] object-cover" src="/public/img/actividad6.jpeg" alt="Suite Ejecutiva"/>
              <div className="p-14 flex flex-col space-y-5 justify-center">
                <div className="flex space-x-3 items-center" >
                  <article className="bg-white rounded-full p-4" >
                    <img className="h-8" src="/src/assets/svg/cubiertos.svg" alt="" />
                  </article>
                  <h3 className="font-cormorant text-2xl tracking-wider " >Buffet</h3>
                </div>
                <p className="font-inter text-gray-600 px-10 text-md" >Explora una amplia variedad de delicias culinarias en nuestro buffet internacional, preparado por chefs expertos.</p>
              </div>
            </div>
        </div>
      </div>
      <Derechos/>
      </>
    );
  };
  
  export default Actividades;
  