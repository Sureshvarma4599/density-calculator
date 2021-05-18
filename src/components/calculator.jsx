import React, { Component } from "react";
import '../App.css'
class Cal extends Component {
    constructor(props) {
      super(props);
      this.state = {
          x:"",
          y:"",
          z:"",
        selectValue:0
      };
  
      this.handleDropdownChange = this.handleDropdownChange.bind(this);
      
    }
    
    handleDropdownChange(e) {
      this.setState({ selectValue: e.target.value });
    }
    onXHandler=(e)=>{
        this.setState({x:e.target.value});
    }
    onYHandler=(e)=>{
        this.setState({y:e.target.value});
    }
    onZHandler=(e)=>{
        this.setState({z:e.target.value});
    }
    onResetHandler=()=>{
        window.location.reload(false)
    }
  
    render() {
      return (
        <div className="cal">
            <form action="">
          
              <input type="number" placeholder="enter value of x in cm" onChange={this.onXHandler} />
              <input type="number" placeholder="enter value of y in cm" onChange={this.onYHandler}/>
              <input type="number" placeholder="enter value of z in cm" onChange={this.onZHandler}/>

              <h2>Result: {this.state.x*this.state.y*this.state.z}cm3</h2>

              <select id="dropdown" onChange={this.handleDropdownChange}>
              <option >choose material</option>
                <option value={2.7}>Alluminium</option>
                <option value={8.0}>Stainless Steel</option>
                <option value={8.96}>Copper</option>
                <option value={8.73}>Brass</option>
              </select>
              <h2>Density: {this.state.x*this.state.y*this.state.z*this.state.selectValue}g</h2>
            <button onClick={this.onResetHandler}>Reset Values</button>
          
          </form>
        </div>
      );
    }
  }
  export default Cal;