const Experiencias = () => {
  return (
    <div className="flex flex-col justify-center items-center p-6 md:p-10" >
      <h1 className="font-cormorant font-light text-gray-700 text-3xl md:text-4xl tracking-wider mb-5 text-center" >Experiencias Crystal Cove</h1>
      <p className="font-inter text-gray-600 text-xl md:text-2xl text-center" >Lo que dicen nuestros huéspedes</p>
      <div className="w-full flex justify-center flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-10 mt-10 items-center" >
        <div className="w-full sm:w-[80%] md:w-[30%] p-8 bg-white rounded-xl flex flex-col justify-center items-center space-y-3 shadow-lg hover:shadow-lg transition duration-500 " >
          <img className="rounded-full h-24" src="/img/persona1.avif" alt="" />
          <p className="font-inter text-gray-600 text-center transform " >Una experiencia inolvidable. El servicio y las instalaciones superaron todas mis expectativas.</p>
          <h3 className="font-cormorant font-light tracking-wider text-xl text-gray-800" >María González</h3>
          <span className="text-xl font-inter text-gray-500" >Huésped Frecuente</span>
        </div>
        <div className="w-full sm:w-[80%] md:w-[30%] p-8 bg-white rounded-xl flex flex-col justify-center items-center space-y-3 shadow-lg hover:shadow-lg transition duration-500 " >
          <img className="rounded-full h-24 " src="/img/persona2.avif" alt="" />
          <p className="font-inter text-gray-600 text-center" >El mejor hotel para combinar trabajo y descanso. El ambiente es perfecto para la concentración.</p>
          <h3 className="font-cormorant font-light tracking-wider text-xl text-gray-800" >Carlos Ruiz</h3>
          <span className="text-xl font-inter text-gray-500" >Viajero de Negocios</span>
        </div>
        <div className="w-full sm:w-[80%] md:w-[30%] p-8 bg-white rounded-xl flex flex-col justify-center items-center space-y-3 shadow-lg hover:shadow-lg transition duration-500 " >
          <img className="rounded-full h-24 " src="/img/persona3.avif" alt="" />
          <p className="font-inter text-gray-600 text-center" >Nuestra estancia fue mágica. Cada detalle estaba cuidadosamente pensado para hacer nuestra experiencia especial.</p>
          <h3 className="font-cormorant font-light tracking-wider text-xl text-gray-800" >Ana Martínez</h3>
          <span className="text-xl font-inter text-gray-500" >Luna de Miel</span>
        </div>
      </div>
    </div>
  );
};

export default Experiencias; 