import React, { Component } from "react";
import Child3 from "../Child3";


class Head extends Component {
    constructor() {
      super();
      this.state = {
        name: "React",

        shchild3: false
      };
      this.hideComponent = this.hideComponent.bind(this);
    }
    
    hideComponent(varname) {
      console.log(varname);
      switch (varname) {
        case "shchild3":
          this.setState({ shchild3: !this.state.shchild3 });
          break;
        default: return;
      }
    }
    
    render() {
  
  
      const {shchild3 } = this.state;
      return (
        <div>
            <div className="flex p-4 bg-yellow-400">
                <div className="flex-1" onClick={() => this.hideComponent("shchild3")}>Perfil</div>
                <div>Logo</div>
            </div>

          
          {shchild3 && <Child3 />}
          <hr />
  
        </div>
      );
    }
  }
    
  export default Head;
  




