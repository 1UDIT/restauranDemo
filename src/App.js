import React from "react";
import { Route, Switch } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap/dist/js/bootstrap.js"
import NavBar from "../src/Component/NavBar.jsx";
import Aboutus from "./Component/Aboutus";
import Contactus from "./Component/Contactus";
import Home from "./Component/Home";
import "../src/index.css";


const App=()=>{
  return(
    <>
    <NavBar/>        
    <Switch>
    <Route exact path="/" component={Home} ></Route>
    <Route exact path="/Aboutus" component={Aboutus} ></Route>
    <Route exact path="/Contactus" component={Contactus} ></Route>
    </Switch>
   
    </>
  )
};

export default App;