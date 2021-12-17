import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";

import "./styles.css";
import AddUserForm from "../../components/Home/AddUserForm";

const Home = () => {
  const [userList, setUserList] = useState({});
  const [newUserId, setNewUserId] = useState(1);

  const addNewUser = (name) => {
    setUserList({ ...userList, [newUserId]: name });
    setNewUserId(newUserId + 1);
  };

  return (
    <Row className="snv-home--wrapper justify-content-center">
      <Col md={6} lg={4} xxl={3}>
        <AddUserForm newUserId={newUserId} addNewUser={addNewUser} />
      </Col>
    </Row>
  );
};

export default Home;
