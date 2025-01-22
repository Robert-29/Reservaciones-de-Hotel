import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home"
import MasHabitaciones from './pages/MasHabitaciones.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mashabitaciones" element={<MasHabitaciones />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;