import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import img1 from "../multimedia/Logo/logo HDZ 2023_page-0001.jpg";

const Header = () => {

  return (
    <>
      <Navbar bg="light" expand="lg" sticky="top" id="Navy">
        <Container className="flex-row-reverse flex-lg-row NavBar">
          
          <Navbar.Brand href="/">
            <img id="logo_header" className="img-logo" src={img1} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end gap-5"
          >
            <Nav className="gap-2 m-auto">
              <Nav.Link
                href="#/about" onClick={window.scrollTo(0,0)}
                className="fw-semibold text-center headerLink"
                
              >
                Acerca de
              </Nav.Link>
              <Nav.Link
                href="#/experience" onClick={window.scrollTo(0,0)}
                className="fw-semibold text-center headerLink"
                
              >
                Proyectos
              </Nav.Link>
  
              <Nav.Link
                href="#/contact" onClick={window.scrollTo(0,0)}
                className="fw-semibold text-center headerLink"
              >
                Contactanos
              </Nav.Link>
              <Nav.Link
                href="#/services" onClick={window.scrollTo(0,0)}
                className="fw-semibold text-center headerLink"
              >
                Servicios
              </Nav.Link>
            </Nav>
           
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
