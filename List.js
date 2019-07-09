import React from "react"
import "./style.css"
import Contactcard from "./Contactcard.js"

class List extends React.Component{
  render(){
  return(
           <ul>
         {this.props.contacts.map((value,index)=><li key={index}></li>)}
         <h2>{this.props.name}</h2>
            </ul>
          
  )
  }
}
export default List;