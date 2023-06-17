import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LucyLogo from "../../assets/LucyLogo.png"
import Cart from "../cartButtom/CartWidget";
import { Link, NavLink } from 'react-router-dom';
import {ROUTES} from '../../constant/Routes'

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
            <Link to={'/'} ><Nav.Link href="#home">Home</Nav.Link></Link>
            <Link to={'/juegos'}><Nav.Link href="#link">Games</Nav.Link></Link>
            <NavDropdown title="Plataformas" id="basic-nav-dropdown">

             <NavDropdown.Item className='d-flex justify-content-center'> <NavLink to={ROUTES.CATEGORY.replace(':categoryId', 1)}>Steam</NavLink></NavDropdown.Item>

              <NavLink to={ROUTES.CATEGORY.replace(':categoryId', 25)}><NavDropdown.Item href="#action/3.2" className='d-flex justify-content-center'> Epic Games
              </NavDropdown.Item></NavLink>
    
               <NavDropdown.Item className='d-flex justify-content-center'><NavLink to={ROUTES.CATEGORY.replace(':categoryId', 7)}>gog.com</NavLink></NavDropdown.Item>

              <NavDropdown.Item className='d-flex justify-content-center'><NavLink to={ROUTES.CATEGORY.replace(':categoryId', 8)}>Origin</NavLink></NavDropdown.Item>
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