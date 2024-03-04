import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ONama from './pages/ONama';
import Program from './pages/Program';
import Linkovi from './pages/Linkovi';
import Kontakt from './pages/Kontakt';
import Arhiva from './pages/Arhiva'
import Navbar from './components/Navbar';




function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<ONama />} />
          <Route path="/program" element={<Program />} />
          <Route path="/linkovi" element={<Linkovi />} />
          <Route path='/arhiva' element={<Arhiva/>}/>
          <Route path="/kontakt" element={<Kontakt />} />
        </Routes>

        <div className='w-60'>
          
        </div>
      </Router>
      
    </>
  );
}

export default App;
