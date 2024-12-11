import React from 'react';
import Logo from '../assets/Logo.png'

import CartWidget from './CartWidget';

const NavBar = () => {


    return (

        <nav>
            <img src={Logo} alt="logo-silla" style={{ width: '30px', border: '1px solid black', borderRadius: '15px', backgroundColor: 'white', padding: '3px',position:'relative', top:'5px' }} />
            <h1>Mi Tienda</h1>
            <ul>
                <li><a href="/">Inicio</a></li>
                <li><a href="/productos">Productos</a></li>
                <li><a href="/contacto">Contacto</a></li>
            </ul>
            <CartWidget />
        </nav>

    )
}






export default NavBar