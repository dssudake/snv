import React from "react";
import { Container, Navbar as RBNavbar, Button } from "react-bootstrap";

const Navbar = () => {
  var isLoadData = localStorage.getItem("isLoadData") === "true";

  const handleClick = () => {
    localStorage.setItem("isLoadData", !isLoadData);
  };

  return (
    <RBNavbar bg="light" expand="lg">
      <Container fluid="lg">
        <RBNavbar.Brand>Social Network Visualizer | SNV</RBNavbar.Brand>
        <form className="d-flex">
          <Button
            variant={isLoadData ? "primary" : "outline-primary"}
            onClick={handleClick}
            type="submit"
          >
            {isLoadData ? "Load Data - ON" : "Load Data - OFF"}
          </Button>
        </form>
      </Container>
    </RBNavbar>
  );
};

export default Navbar;
