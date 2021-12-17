import React from "react";
import { Container, Navbar as RBNavbar } from "react-bootstrap";

const Navbar = () => {
  return (
    <RBNavbar bg="light" expand="lg">
      <Container fluid="lg">
        <RBNavbar.Brand>Social Network Visualizer | SNV</RBNavbar.Brand>
      </Container>
    </RBNavbar>
  );
};

export default Navbar;
