import React, { Component } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";
import Head from "./Modulos/header";
import Busqueda from "./Modulos/busqueda";
import Index from "./Contenido";  





class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
      shchild1: false,
      shchild2: false,
    };
    this.hideComponent = this.hideComponent.bind(this);
  }
  
  hideComponent(varname) {
    console.log(varname);
    switch (varname) {
      case "shchild1":
        this.setState({ shchild1: !this.state.shchild1 });
        break;
      case "shchild2":
        this.setState({ shchild2: !this.state.shchild2 });
        break;
      default: return;
    }
  }
  
  render() {


    const { shchild1, shchild2 } = this.state;
    return (
      <div>
               
        <Head />
          
       
        < Busqueda/>
    
        <div className="grid grid-cols-2">
            <div onClick={() => this.hideComponent("shchild1")} className="border-2 border-yellow-600 p-2 hover:bg-yellow-200">Categorias</div>
            <div onClick={() => this.hideComponent("shchild2")} className="border-2 border-yellow-600 p-2 hover:bg-yellow-200">Favoritos</div>
        </div>

        
        {shchild1 && <Child1 />}
        <hr />
        {shchild2 && <Child2 />}
        <hr />

        < Index/>

      </div>
    );
  }
}
  
export default App;
