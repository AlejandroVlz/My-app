
import React, { Component } from "react";
  
class Child2 extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }
  
  render() {
    return <div>
                <div className="grid grid-cols-2 divide-y divide-light-yellow-400 divide-yellow-300">
                    <div className="p-2">Tacos</div>
                    <div className="p-2">Rápida</div>
                    <div className="p-2">Mariscos</div>
                    <div className="p-2">Postres</div>
                </div>
    </div>;
  }
}
  
export default Child2;