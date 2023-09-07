
import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Inicio from './pages/Home';
import Peliculas from './pages/Peliculas.jsx';
import Contacto from './pages/Contacto';

function App() {
  return (
    <>
     <BrowserRouter> 

      <Header/>
      <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/Peliculas' element={<Peliculas/>}/>
        <Route path='/Contacto' element={<Contacto/>}/>
      </Routes>
      </BrowserRouter>
      
      <Footer/>
    </>
  );
}

export default App;
