import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from "react-bootstrap/Button";
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {BiSearch} from 'react-icons/bi';

const NavBar=()=>{

    return(
        <>
    <Navbar bg="" variant="dark" expand="lg" className="px-3 fixed-top "> 
    <Container>
     <Navbar.Brand className="navbar-brand" href="/#home">
        {`LIBEL ACADEMY`}
      </Navbar.Brand>
     <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav" className="d-flex flex-row justify-content-end">
        <Nav className="d-flex flex-row justify-content-end">
         
        <NavDropdown title="Home" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            {/* <Nav.Link target="blanck" href="https://1drv.ms/b/s!AlSgIdEmzI5klrxgFeEXvKCJrOjtTA?e=6K0zLJ">{lengua==="eng"?<>Resume</>:<>Currículum</>}</Nav.Link> */}
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#about">Services</Nav.Link>
            <Nav.Link href="#skills">Pricing</Nav.Link>
            <Nav.Link href="#about">Products</Nav.Link>
            <Nav.Link href="#attrack">News</Nav.Link>
            <Nav.Link href="#skills"><AiOutlineShoppingCart/></Nav.Link>
            <Nav.Link href="#skills"><BiSearch></BiSearch></Nav.Link>
            <Nav.Link href=""> <Button variant="light rounded-pill">Contact Us</Button></Nav.Link>
          
        </Nav>
        
        </Navbar.Collapse>
        </Container>
    </Navbar>
    </>
    );
}

export default NavBar;