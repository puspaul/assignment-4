import React from "react"
import "./style.css"
import Romance from "./Romance.js"
import List from "./List.js"
import App from "./App.js"



import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Contactcard extends React.Component
{
    constructor(props){
        super(props)
        this.state={
            contacts:[]
                }
    }
    handleClick=()=>
        {
            
            alert(this.props.name+" is added");
            const newItem=this.props.name;
            this.setState({contacts:[...this.state.contacts,newItem]});         
           
         
                  }
    
    render(){
        return(
           
           <div class="header">
                
            
        <div className="maincontainer">
           <div class="thecard" >
            <div class="thefront">
            
            <h2 className="name"><span className="tit">MOVIE:</span>{this.props.name}</h2>
            
            <h2 className="imdb"><span className="tit">IMDB:</span>{this.props.imd}</h2>
            
            <h2 className="like"><span className="tit">LIKES:</span>{this.props.like}</h2>
            
            </div>
            <div class="theback">
            <img class="resize" src={this.props.imgUrl}/>    

            </div>

            </div>
            
            <button onClick={this.handleClick} className="atl">ADD TO LIST</button>               
  </div>
            </div>
            )           
}
}
export default Contactcard