const Contactar = () => {
    return (
      <div className="flex flex-col justify-center items-center p-10" >
        <h1 className="font-cormorant font-light text-gray-700 text-4xl tracking-wider mb-5 " >Contacto</h1>
        <div className="w-full flex justify-center space-x-10 mt-10" >
              <div className="w-[30%] p-8 bg-white rounded-xl flex flex-col justify-centerc items-center space-y-3 " >
                  <img className="rounded-full h-10" src="/src/assets/svg/ubicacion.svg" alt="" />
                  <h3 className="font-cormorant font-light tracking-wider text-xl text-gray-800" >Ubicación</h3>
                  <p className="text-md font-inter text-gray-500" >Blvd. Kukulcan Km 10,</p>
                  <p className="text-md font-inter text-gray-500" >Zona Hotelera, Cancún, Q.R.</p>
              </div>
              <div className="w-[30%] p-8 bg-white rounded-xl flex flex-col justify-center items-center space-y-3 " >
              <img className="h-10" src="/src/assets/svg/telefono.svg" alt="" />
                  <h3 className="font-cormorant font-light tracking-wider text-xl text-gray-800" >Teléfono</h3>
                  <p className="text-md font-inter text-gray-500" >+52 55 4904 0246</p>
                  <p className="text-md font-inter text-gray-500" >+1 234 567 890</p>
              </div>
              <div className="w-[30%] p-8 bg-white rounded-xl flex flex-col justify-center items-center space-y-3 " >
              <img className="h-10" src="/src/assets/svg/email.svg" alt="" />
                  <h3 className="font-cormorant font-light tracking-wider text-xl text-gray-800" >Email</h3>
                  <p className="text-md font-inter text-gray-500" >robert292005@gmail.com</p>
                  <p className="text-md font-inter text-gray-500" >roberto.29.2005.h@gmail.com</p>
              </div>
          </div>
      </div>
    );
};  
  
export default Contactar;