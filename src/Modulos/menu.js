import React from 'react';
import logo from '../logo.svg';

function Opciones(){
    return (
        <div className ="">
            <div className="p-4"> <img src={logo} className="w-2/12 rounded-full border-2 border-yellow-500" /> <p>Nombre usuario</p> </div>
            <div className="border-t-2 border-yellow-500 p-2"><a href="#">Pedidos</a></div>
            <div className="border-t-2 border-yellow-500 p-2"><a href="#">Cartera</a></div>
            <div className="border-t-2 border-yellow-500 p-2"><a href="#">Ayuda</a></div>
            <div className="border-t-2 border-yellow-500 p-2"><a href="#">Configuraciónn</a></div>
        </div>
    );
}


export default Opciones;