import React from 'react';
import { FaFacebook, FaInstagram } from "react-icons/fa";
import reactLogo from '../assets/image/logo.png';
import '../App.css';

const Footer = () => {
    return (
        <footer>
                <div class="row">
                    <div>
                        <h6>Seguinos en nuestras redes</h6>
                        <a href="https://www.facebook.com/" target="_blanck" title="Facebook"><FaFacebook /></a>
                        <a href="https://www.instagram.com/" target="_blanck" title="Instagram"><FaInstagram /></a>
                    </div>
                    <div>
                        <img src={reactLogo} className="logo react" alt="React logo" width="24" height="24"/>
                            <h4>Movies</h4>
                    </div>
                    <small class="d-block mb-3">© 2023</small>
                </div>
        </footer>
    )
}
export default Footer 