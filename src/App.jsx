import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home"
import MasHabitaciones from './pages/MasHabitaciones.jsx';
import Actividades from './pages/Actividades.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mashabitaciones" element={<MasHabitaciones />} />
          <Route path="/actividades" element={<Actividades />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;