import './App.css';
import NavBar from "./components/NavBar"
import MemeLogic from "./components/MemeLogic"
import { Container, Breadcrumb } from 'react-bootstrap'
import React from 'react';


function App (){
  return (
      <div className="App">
        <NavBar />
        <Container fluid="sm">
            <MemeLogic />
        </Container>
      </div>
    )
  } 
export default App;
