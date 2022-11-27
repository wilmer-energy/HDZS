import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import ShoppingCart from "./ShoppingCart";
import NavDropdown from "react-bootstrap/NavDropdown";
import img1 from "../multimedia/HDZ_logo.png";

const Header = ({ filter }) => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const showLogIn = () => {
    navigate("/LogIn");
  };
  const showPurchases = () => {
    navigate("/purchases");
  };
  const showCart = () => {
    navigate("/cart");
  };

  return (
    <>
      <Navbar bg="light" expand="lg" sticky="top">
        <Container className="flex-row-reverse flex-lg-row">
          <Form className="d-flex d-lg-none">
            <Button variant="none" className="p-2" onClick={showLogIn}>
              <i className="fa-regular fa-user fs-6"></i>
            </Button>
            <Button variant="none" className="p-2" onClick={showPurchases}>
              <i className="fa-solid fa-bag-shopping fs-6"></i>
            </Button>
            <Button variant="none" onClick={handleShow}>
              <i className="fa-solid fa-cart-shopping fs-5"></i>
            </Button>
          </Form>
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
                onClick={() => {
                  filter(0);
                }}
              >
                Acerca de
              </Nav.Link>
              <Nav.Link
                href="#/experience"
                className="fw-semibold text-center"
                onClick={() => {
                  filter(1);
                }}
              >
                Proyectos
              </Nav.Link>
              <Nav.Link
                href="#/blog"
                className="fw-semibold text-center"
                onClick={() => {
                  filter(2);
                }}
              >
                Blogs
              </Nav.Link>
              <Nav.Link
                href="#/contact"
                className="fw-semibold text-center"
                onClick={() => {
                  filter(2);
                }}
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
            <Form className="d-flex gap-0 gap-sm-2 d-none d-lg-flex">
              <Button variant="none" onClick={showLogIn}>
                <i className="fa-regular fa-user fs-5"></i>
              </Button>
              <Button variant="none" onClick={showPurchases}>
                <i className="fa-solid fa-bag-shopping fs-5"></i>
              </Button>
              <Button variant="none" onClick={handleShow}>
                <i className="fa-solid fa-cart-shopping fs-5"></i>
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <ShoppingCart show={show} handleClose={handleClose} />
    </>
  );
};

export default Header;
