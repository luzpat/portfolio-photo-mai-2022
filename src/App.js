import './css/App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Acceuil from './pages/Acceuil';
import Photos from './pages/Photos';
import Contacts from './pages/Contacts';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Acceuil />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<Acceuil />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
