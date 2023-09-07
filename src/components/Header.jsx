import React from 'react';
import reactLogo from '../assets/image/logo.png';
import '../App.css';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header>
      <div className='Navbar'>
      <nav className="navbar navbar-expand ">
          <div className="navbar-brand text-white">
            Movies
            <img src={reactLogo} className="logo react" alt="React logo" width="30" height="30" />
          </div>
          <div className="collapse navbar-collapse text-white" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto ">
              <li className="nav-item active ">
                <Link className="nav-link text-white" to='/'>Inicio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white " to='/Peliculas'>Peliculas</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to='/Contacto'>Contacto</Link>
              </li>
            </ul>
          </div>
        </nav>
        </div>
    </header>
    
  )
}

export default Header