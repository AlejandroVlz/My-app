import React, { Component } from "react";
import logo from './logo.svg';



  
class Child3 extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }
  
  render() {
    return (
      
            <div>
              <div>
                <div className="p-4"> <img src={logo} className="w-2/12 rounded-full border-2 border-yellow-500" /> <p>Nombre usuario</p> </div>
                <div className="border-t-2 border-yellow-500 p-2"> Pedidos</div>
                <div className="border-t-2 border-yellow-500 p-2">Cartera</div>
                <div className="border-t-2 border-yellow-500 p-2">Ayuda</div>
                <div className="border-t-2 border-yellow-500 p-2">Configuración</div>
              </div>
                  
                
            </div>

      
            );
  }

}
  
export default Child3;