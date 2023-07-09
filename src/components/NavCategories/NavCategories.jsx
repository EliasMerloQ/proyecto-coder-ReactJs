import React from "react";
import {ROUTES} from '../../constant/Routes'
import {NavLink } from "react-router-dom";
import {NavDropdown} from "react-bootstrap";

function NavCategories(){
  return (
    <NavDropdown title="Categorias" id="basic-nav-dropdown">        

      <NavLink to={ROUTES.CATEGORY.replace(':categoryId', "Multijugador")}><NavDropdown.Item href="#action/3.2" className='d-flex justify-content-center'> Multijugador
      </NavDropdown.Item></NavLink>

      <NavLink to={ROUTES.CATEGORY.replace(':categoryId', 25)}><NavDropdown.Item href="#action/3.2" className='d-flex justify-content-center'> Epic Games
      </NavDropdown.Item></NavLink>
    
      <NavDropdown.Item className='d-flex justify-content-center'><NavLink to={ROUTES.CATEGORY.replace(':categoryId', 7)}>gog.com</NavLink></NavDropdown.Item>

      <NavDropdown.Item className='d-flex justify-content-center'><NavLink to={ROUTES.CATEGORY.replace(':categoryId', 8)}>Origin</NavLink></NavDropdown.Item>
      </NavDropdown>
  )
}
export default NavCategories;