import React, { Component } from "react";
  
class Child1 extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }
  
  render() {
    return <div>
                 <div className="grid grid-cols-2 divide-y divide-light-yellow-400 divide-yellow-300">
                    <div className="p-2 hover:bg-yellow-200">Tacos</div>
                    <div className="p-2 hover:bg-yellow-200">Pizza</div>
                    <div className="p-2 hover:bg-yellow-200">Mexicana</div>
                    <div className="p-2 hover:bg-yellow-200">Rápida</div>
                    <div className="p-2 hover:bg-yellow-200">Mariscos</div>
                    <div className="p-2 hover:bg-yellow-200">Postres</div>
                </div>
            </div>;
  }
}
  
export default Child1;