import React from "react"
import "./style.css"

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Action from "./Action.js"
import Romance from "./Romance.js"
import Comedy from "./Comedy.js"
import Mystery from "./Mystery.js"
import Drama from "./Drama.js"
import List from "./List.js"

class App extends React.Component{
  render()
{
return(
  <Router>
  <div className="contacts">
    <nav><p>GENRE</p>
  <ul>
  <li ><Link to="/" style={{textDecoration:'none'}} className="opt" >Home</Link></li>
  <li ><Link to="/Action" style={{textDecoration:'none'}} className="opt">Action</Link></li>
  <li ><Link to="/Romance" style={{textDecoration:'none'}} className="opt">Romance</Link></li>
  <li ><Link to="/Comedy" style={{textDecoration:'none'}} className="opt">Comedy</Link></li>
  <li ><Link to="/Mystery" style={{textDecoration:'none'}} className="opt">Mystery</Link></li>
  <li ><Link to="/Drama" style={{textDecoration:'none'}} className="opt">Drama</Link></li>
  
  <li ><Link to="/List" style={{textDecoration:'none'}} className="opt" >Movie List</Link></li>
  </ul>
  </nav>
  <div class="headers">
  </div>
    <Route path="/" exact strict render={
      ()=>{
        return(<div class="home">
        <h1 className="wel">SAY HI TO MOVIES</h1>
          <ul>
          <li><Link to="/" className="alte" >Home</Link></li>
          <li><Link to="/Action" className="alte">Action</Link></li>
          <li><Link to="/Romance" className="alte">Romance</Link></li>
          <li><Link to="/Comedy" className="alte">Comedy</Link></li>
          <li><Link to="/Mystery" className="alte">Mystery</Link></li>
          <li><Link to="/Drama" className="alte">Drama</Link></li>
          <li><Link to="/List" className="alte">Movie List</Link></li>
          </ul></div>
          );
      }
    }
    />
    <Route path="/Action" exact strict render={
      ()=>{
        return(<Action />);
      }
    }
    />
    
    <Route path="/Romance" exact strict render={
      ()=>{
        return(<Romance />);
      }
    }
    />
    <Route path="/Drama" exact strict render={
      ()=>{
        return(<Drama/>);
      }
    }
    />
    <Route path="/Comedy" exact strict render={
      ()=>{
        return(<Comedy />);
      }
    }
    />
    <Route path="/Mystery" exact strict render={
      ()=>{
        return(<Mystery />);
      }
    }
    />
    <Route path="/List" exact strict render={
      ()=>{
        return(<List contacts={this.props.contacts} />);
      }
    }
    />
  </div>
  </Router>
)
}
}
export default App;
