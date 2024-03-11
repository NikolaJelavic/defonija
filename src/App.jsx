import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ONas from './pages/ONas';
import Program from './pages/Program';
import Povezave from './pages/Povezave';
import Arhiv from './pages/Arhiv'
import Kontakt from './pages/Kontakt';
import Navbar from './components/Navbar';




function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<ONas />} />
          <Route path="/program" element={<Program />} />
          <Route path="/povezave" element={<Povezave />} />
          <Route path="/arhiv" element={<Arhiv />}/>
          <Route path="/kontakt" element={<Kontakt />} />
        </Routes>

        <div className='w-60'>
          
        </div>
      </Router>
      
    </>
  );
}

export default App;
