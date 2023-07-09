import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LucyLogo from "../../assets/LucyMedia/LucyLogo.png"
import Cart from "../cartButtom/CartWidget";
import { Link} from 'react-router-dom';
import NavCategories from '../NavCategories/NavCategories';

function Menu() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container className='navCont' fluid>
        <img src={LucyLogo} className="navLogo"  alt="" />
        <Navbar.Brand href="#home" className='navTitle'><h1>Lucy</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Link to={'/'} ><Nav.Link href="#home">Home</Nav.Link></Link>
            <Link to={'/juegos'}><Nav.Link href="#link">Games</Nav.Link></Link>
            <NavCategories/>
          </Nav>
          <Nav.Link href="#link"> <Cart/> </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;