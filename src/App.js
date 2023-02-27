import "./App.css";
import React from "react"
import Header from "./components/Header/Header";
import Footer from "./components/UI/Footer";

import Form from "./components/Form/Form";

import Home from "./components/Home/Home"


import {  BrowserRouter as Router, Route, Routes } from 'react-router-dom';




function App() {
  return (
    <>
    <Header />
    <main>
      <Router>
      <Routes>
        <Route path='/form' element={<Form />} />
        <Route path='/' element={<Home />} />
        </Routes>

      </Router>
   
     

    </main>
   
    <Footer />
    
    </>
  );
}

export default App;




