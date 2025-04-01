import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Card } from "react-bootstrap";
import Alert from 'react-bootstrap/Alert';
import AllTheBooks from '../AllTheBooks';



function App() {
 return (
<>
<Navbar  expand="lg" className="bg-body-tertiary"> 
<Container>
<Navbar.Brand href="#home">Il Mio Sito</Navbar.Brand>
<Navbar.Toggle aria-controls="basic-navbar-nav" /> 
<Navbar.Collapse id="basic-navbar-nav">
<Nav className="ms-auto"> 
<Nav.Link href="#home">Home</Nav.Link>
<Nav.Link href="#about">About</Nav.Link>
 <Nav.Link href="#browse">Browse</Nav.Link>
</Nav>
</Navbar.Collapse>
</Container>
</Navbar>
<Alert variant="danger">
<Alert.Heading>Attenzione!</Alert.Heading>
 This is a danger alert with{' '}
<Alert.Link href="#">link</Alert.Link>. Give it a click if
you like.
</Alert>
<div>
      <h1>Elenco dei libri horror</h1>
      <AllTheBooks />
    </div>
<Card>
<Card.Body>This is some text within a card body.</Card.Body>
</Card>
      
</>
 )
}

export default App
