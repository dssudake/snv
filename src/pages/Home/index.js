import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";

import "./styles.css";
import AddUserForm from "../../components/Home/AddUserForm";
import ConnectUsersForm from "../../components/Home/ConnectUsersForm";

const Home = () => {
  const [userList, setUserList] = useState({});
  const [newUserId, setNewUserId] = useState(1);
  const [userConnections, setUserConnections] = useState({});

  const addNewUser = (name) => {
    setUserList({ ...userList, [newUserId]: name });
    setUserConnections({ ...userConnections, [newUserId]: [] });
    setNewUserId(newUserId + 1);
  };

  const addNewConnection = (user1, user2) => {
    setUserConnections({
      ...userConnections,
      [user1]: [...userConnections[user1], user2],
    });
    setNewUserId(newUserId + 1);
  };

  return (
    <Row className="snv-home--wrapper justify-content-center py-5">
      <Col md={6} lg={4} xxl={3}>
        <AddUserForm newUserId={newUserId} addNewUser={addNewUser} />
      </Col>

      <Col md={6} lg={4} xxl={3}>
        <ConnectUsersForm
          userList={userList}
          userConnections={userConnections}
          addNewConnection={addNewConnection}
        />
      </Col>
    </Row>
  );
};

export default Home;
