
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Rodape from './components/Rodape';
import Home from './pages/Home';
import Midias from './pages/Midias';
import Sobre from './pages/Sobre';
import './index.css';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/midias" element={<Midias />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </main>
      <Rodape />
    </BrowserRouter>
  );
}

export default App;
