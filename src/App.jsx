import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home.jsx";
import MasHabitaciones from './pages/MasHabitaciones.jsx';
import Actividades from './pages/Actividades.jsx';
import Reservar from './pages/Reservar.jsx';
import MisReservaciones from './pages/MisReservaciones.jsx';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mashabitaciones" element={<MasHabitaciones />} />
          <Route path="/actividades" element={<Actividades />} />
          <Route path="/reservar/:id" element={<Reservar />} />
          <Route path="/misreservaciones" element={<MisReservaciones />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;