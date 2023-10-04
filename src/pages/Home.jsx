import React from "react";
import reactslider from '../assets/image/slider.jpg'
import reactslider2 from '../assets/image/slider2.jpg'
import reactslider3 from '../assets/image/slider3.jpg'
import reactLogo from '../assets/image/logo.png';
import reactLogo1 from '../assets/image/img1.jpeg';
import reactPubli from '../assets/image/ejemplo-de-banner-ayanet-recursos-humanos.jpg';
import reactPubli2 from '../assets/image/images.jfif';
import { Link } from 'react-router-dom';
import '../App.css';

const Home = () => {
  return (
    <>
         <div className="conteiner-index">
          <aside>
            <img src={reactPubli} alt="" width="150" height="250"/>
            <img src={reactPubli2} alt="" width="150" height="250"/>
            </aside>
         <div>
          <h2>Mira las mejores pelis en casa </h2>
          <img src={reactLogo} className="logo react" alt="React logo" width="150" height="150"/>
          <Link className="btn btn-secondary" to='/Peliculas'>Ver Peliculas</Link>
          <img src={reactLogo1} className="logo1 react" alt="React logo1" width="300" height="450" />
        </div>
        </div>
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <img src={reactslider} className="img-fluid w-90" alt="Responsive image" />
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img src={reactslider2} className="img-fluid w-90" alt="Responsive image" />
            </div>
            <div className="carousel-item">
              <img src={reactslider3} className="img-fluid w-90" alt="Responsive image" />
            </div>
          </div>
        </div>
    </>
  )
}
export default Home