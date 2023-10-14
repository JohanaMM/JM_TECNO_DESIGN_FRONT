import React from "react";
import "../estilos/footer.css";
import { Link as LinkRouter } from "react-router-dom";
import {FaMapMarkedAlt, FaPhone, FaEnvelopeOpen, FaFacebook, FaTwitter, FaInstagram,} from "react-icons/fa";
import Logo from "../image/logo.png";

function Footer() {
  return (
    <>
      <div className="footer-section">
        <div className="container">
          <div className="footer-content pt-5 pb-5">
            <div className="row">
              <div className="col-xl-4 col-lg-4 mb-50">
                <div className="footer-widget">
                <div className="subscribe-form">
                    <form action="#">
                      <input type="text" placeholder="Buscar" />
                    </form>
                  </div>
                  <div className="footer-logo">
                    <LinkRouter to={"/Inicio"}>
                      <img src={Logo} className="logo" alt="Logo" />
                    </LinkRouter>
                  </div>
                  <div className="nav-links">
                    <LinkRouter to={"/Productos"}>
                      <p>Productos</p>
                    </LinkRouter>
                    <LinkRouter to={"/Talles"}>
                      <p>Talles</p>
                    </LinkRouter>
                    <LinkRouter to={"/Dudas"}>
                      <p>Dudas</p>
                    </LinkRouter>
                    <LinkRouter to={"/Contacto"}>
                      <p>Contacto</p>
                    </LinkRouter>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-cta pt-5 pb-5">
              <div className="row"></div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div className="footer-widget-text">
                <div className="footer-widget-links">
                    <div className="footer-widget-heading">
                    <h3>Links Importantes</h3>
                    </div>
                    <div className="col-xl-4 col-md-4 mb-30">
                    <div className="single-cta">
                        <FaEnvelopeOpen style={{ fontSize: "25px" , marginBottom:'10px' }} />
                        <div className="cta-text">
                        <h4>E-mail</h4>
                        <span>mail@info.com</span>
                        </div>
                    </div>
                    </div>
                    <div className="col-xl-4 col-md-4 mb-30">
                    <div className="single-cta">
                        <FaPhone style={{ fontSize: "25px", marginBottom:'10px'  }} />
                        <div className="cta-text">
                        <h3>Contacto</h3>
                        <span>9876543210 0</span>
                        </div>
                    </div>
                    </div>
                    <div className="col-xl-4 col-md-4 mb-30">
                    <div className="single-cta">
                        <FaMapMarkedAlt style={{ fontSize: "25px", marginBottom:'10px'  }} />
                        <div className="cta-text">
                        <h4>Dirección</h4>
                        <span>1010 Avenue, sw 54321, chandigarh</span>
                        </div>
                    </div>
                    </div>
                </div>    
                <div className="footer-social-icon">
                <div className="footer-widget-heading">
                    <h3>Siguenos</h3>
                    </div>
                <div className="col-xl-4 col-md-4 mb-30">    
                <div className="single-cta">    
                  <FaFacebook style={{fontSize: "25px", marginBottom:'10px' }}/>
                <div className="cta-text">
                    <h4>Facebook</h4>
                    <span>/jmtecnodesing</span>
                </div>
                </div>
                </div>
                <div className="single-cta">    
                  <FaInstagram style={{fontSize: "25px", marginBottom:'10px' }}/>
                <div className="cta-text">
                    <h4>Instagram</h4>
                    <span>@jmtecnodesing</span>
                </div>
                </div>
                <div className="single-cta">
                  <FaTwitter style={{fontSize: "25px", marginBottom:'10px' }}/>
                  <div className="cta-text">
                    <h4>Instagram</h4>
                    <span>@jmtecnodesing</span>
                </div> 
                </div> 
                </div>                
              </div>
            </div>
            
          </div>
        </div>
        <div className="copyright-area">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                <div className="copyright-text">
                  <p>Copyright &copy; 2023, All Right Reserved</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
