import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

// React Bootstrap Configuration
import "../node_modules/react-bootstrap/dist/react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


let App = () => {
  return (
    <>
      <Navbar/>
      <Header/>
    </>
  );
};

export default App;
