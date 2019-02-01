import React from "react"
import {Link,NavLink,HashRouter,Route} from "react-router-dom"
import Home from "./Home"
import Stuff from "./Stuff"
import ContactUs from "./Contact"

class Main extends React.Component{
    render(){
        return(
            <HashRouter>
            <div><h1>Menus</h1>
                 <ul className="header">
            <li><NavLink href="/" to="/">Home</NavLink></li>
            <li><NavLink href="/stuff" to="/stuff">Stuff</NavLink></li>
            <li><NavLink href="/contact" to="/contact">Contact</NavLink></li>
          </ul>
          <div className="content">
             <Route exact path="/" Component={Home}></Route>
             <Route path="/stuff" Component={Stuff}></Route>
             <Route path="/contact" Component={ContactUs}></Route>
             
          </div>
            </div>
            </HashRouter>
        )
    }
}

export default Main