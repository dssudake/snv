import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./styles.css";
import AddUserForm from "../../components/Home/AddUserForm";
import ConnectUsersForm from "../../components/Home/ConnectUsersForm";
import NetworkGraph from "../../components/Home/NetworkGraph";
import GetSeparation from "../../components/Home/GetSeparation";

const Home = () => {
  const [userList, setUserList] = useState({});
  const [newUserId, setNewUserId] = useState(1);
  const [userConnections, setUserConnections] = useState({});
  const [network, setNetwork] = useState({
    key: 0,
    graph: {
      nodes: [],
      edges: [],
    },
  });

  const addNewUser = (name) => {
    setUserList({ ...userList, [newUserId]: name });
    setUserConnections({ ...userConnections, [newUserId]: [] });
    setNetwork({
      key: network.key + 1,
      graph: {
        ...network.graph,
        nodes: [...network.graph.nodes, { id: newUserId, label: name }],
      },
    });
    setNewUserId(newUserId + 1);
  };

  const addNewConnection = (user1, user2) => {
    setUserConnections({
      ...userConnections,
      [user1]: [...userConnections[user1], user2],
    });
    setNetwork({
      key: network.key + 1,
      graph: {
        ...network.graph,
        edges: [
          ...network.graph.edges,
          { from: parseInt(user1), to: parseInt(user2) },
        ],
      },
    });
    setNewUserId(newUserId + 1);
  };

  return (
    <Container className="snv-home--wrapper" fluid>
      <Row className="justify-content-center py-5 gy-3 gy-md-4">
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

        <Col
          xs={{ order: 2 }}
          md={{ order: 1 }}
          lg={{ span: 8, order: 2 }}
          xxl={6}
        >
          <NetworkGraph network={network} />
        </Col>

        <GetSeparation userList={userList} userConnections={userConnections} />
      </Row>
    </Container>
  );
};

export default Home;
