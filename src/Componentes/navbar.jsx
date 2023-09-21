import React from 'react';
import '../estilos/navbar.css'
import Avatar from '@mui/material/Avatar';
import { Link as LinkRouter } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa';
import Logo from '../image/logo.png'
import Busqueda from '../Componentes/busqueda'

function Navbar({ peliculas }) {

  return (
    <>
      <div className="nav">
        <div className="nav-header">
          <div className="nav-title">
            <LinkRouter to={"/Home"}>
              <img src={Logo} className='logo' alt="Logo" />
            </LinkRouter>
          </div>
        </div>
        <div>
          <div className='nav1'>
            <Busqueda/>
            <div className='nav-usuario'>
            <FaShoppingCart style={{ color: '#D3B2E3', fontSize:'30px' }} />
              <Avatar
                sx={{
                  width: 40,
                  height: 40,
                  color: '#1F2833',
                  marginLeft: '50px',
                  marginRight: '15px',
                  backgroundColor:'#D3B2E3'
                }}
                alt="Avatar"
              />
            </div>
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
    </>
  );
}
export default Navbar;
