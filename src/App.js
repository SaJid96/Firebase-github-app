import React, { useState } from "react";
//import logo from "./logo.svg";


import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
//react -router

import {BrowserRouter as Router, Route,Switch,Link} from "react-router-dom";

//toast
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css"

//firebase

import firebase from "firebase/app";
import "firebase/auth";


//components

import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import PageNotFound from "./pages/PageNotFound";
import { UserContext } from "./Context/UserContext";
import Footer from "./layout/Footer";
import Header from "./layout/Header";

import firebaseConfig from "./Config/firebaseConfig";

//init firebase

firebase.initializeApp(firebaseConfig);


const App=()=>{

const [user,setUser]=useState(null);

  return(

    <Router>
      <ToastContainer/>
      <UserContext.Provider value={{user,setUser}}>
        <Header/>
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/signin" component={Signin} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="*" component={PageNotFound} />

      </Switch>
      <Footer/>
      </UserContext.Provider>
      <Footer/>

    </Router>


  );


};

export default App;