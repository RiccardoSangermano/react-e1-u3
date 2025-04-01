import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";

function MyNav() {
    return (
      <Navbar bg="light" expand="lg"> {/* expand="lg" rende la navbar reattiva */}
        <Container>
          <Navbar.Brand href="#home">Il Mio Sito</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" /> {/* Pulsante hamburger per schermi piccoli */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto"> {/* me-auto spinge i link a sinistra */}
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#browse">Browse</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  
  export default MyNav;