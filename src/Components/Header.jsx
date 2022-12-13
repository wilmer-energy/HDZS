import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import img1 from "../multimedia/HDZ_logo.PNG";

const Header = () => {

  return (
    <>
      <Navbar bg="light" expand="lg" sticky="top">
        <Container className="flex-row-reverse flex-lg-row">
          
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
                href="#/about"
                className="fw-semibold text-center"
                
              >
                Acerca de
              </Nav.Link>
              <Nav.Link
                href="#/experience"
                className="fw-semibold text-center"
                
              >
                Proyectos
              </Nav.Link>
              <Nav.Link
                href="#/blog"
                className="fw-semibold text-center"
                
              >
                Blogs
              </Nav.Link>
              <Nav.Link
                href="#/contact"
                className="fw-semibold text-center"
              >
                Contactanos
              </Nav.Link>
              <NavDropdown
                title="Servicios"
                className="fw-semibold text-center"
              >
                <NavDropdown.Item href="#/eRenovables">
                  Energias renovables
                </NavDropdown.Item>
                <NavDropdown.Item href="#/mElectrico">
                  Mantenimiento eléctrico
                </NavDropdown.Item>
                <NavDropdown.Item href="#/cableado">
                  Cableado estructurado
                </NavDropdown.Item>
                <NavDropdown.Item href="#/disenio">
                  Diseño y contrucción
                </NavDropdown.Item>
                <NavDropdown.Item href="#/UPS">
                  UPS y generadores
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#/services">
                  Todos los servicios
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
           
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
