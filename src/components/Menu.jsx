const Menu = () => {
  return (
    <header className="fixed top-0 left-0 h-20 w-full pt-4 pb-4 flex items-center justify-center bg-white/95 shadow-sm  z-50">
      <nav className="w-[90%] flex items-center justify-between">
        <span className="flex items-center space-x-2">
          <h1 className="text-2xl font-cormorant tracking-wider ">CRYSTAL COVE</h1>
        </span>
        <ul className="flex space-x-10 font-inter text-sm tracking-wider">
          <li><a href="/">INICIO</a></li>
          <li><a href="/mashabitaciones">HABITACIONES</a></li>
          <li><a href="/actividades">ACTIVIDADES</a></li>
          <li><a href="#">INICIAR SESIÓN</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Menu;