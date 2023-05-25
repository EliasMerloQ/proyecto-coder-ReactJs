import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LucyLogo from "../../assets/LucyLogo.png"
import Cart from "../cartButtom/CartWidget"
import "./NavbarStyle.css"

function Menu() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container className='navCont' fluid>
        <img src={LucyLogo} className="navLogo"  alt="" />
        <Navbar.Brand href="#home" className='navTitle'><h1>Lucy</h1></Navbar.Brand>
        <h3></h3>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Games</Nav.Link>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">xbox</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Ps
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Steam</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Epic Games
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav.Link href="#link"> <Cart/> </Nav.Link>
                    <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;