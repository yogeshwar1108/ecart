import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import cartSlice from "../store/cartSlice";


function Navbarpanel() {
  const cartproduct =useSelector(state=>state.cart)
  return (
    <>
      {" "}
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">Redux Tool Kit</Navbar.Brand>
          <Nav>
            <Nav.Link to="/" as={Link}>
              Products
            </Nav.Link>
          </Nav>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end p-2">
            <Navbar.Text>
              <Nav.Link to="/Cart" as={Link}>
                BAG {cartproduct.length}
              </Nav.Link>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbarpanel;
