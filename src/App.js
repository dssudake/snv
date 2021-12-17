import React, { Fragment } from "react";
import { Container } from "react-bootstrap";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";

const App = () => {
  return (
    <Fragment>
      <Navbar />

      <Container fluid>
        <Home />
      </Container>
    </Fragment>
  );
};

export default App;
