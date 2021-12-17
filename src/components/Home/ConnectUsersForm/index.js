import React, { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";

const ConnectUsersForm = ({ userList, userConnections, addNewConnection }) => {
  const [firstUser, setFirstUser] = useState("");
  const [secondUser, setSecondUser] = useState("");

  const handleClick = () => {
    addNewConnection(firstUser, secondUser);
    setFirstUser("");
    setSecondUser("");
  };

  return (
    <Card className="shadow">
      <Card.Body>
        <Card.Title className="text-center">Connect Users</Card.Title>
        <Form.Group className="my-3">
          <Form.Select
            value={firstUser}
            onChange={(e) => {
              setFirstUser(e.target.value);
              setSecondUser("");
            }}
          >
            <option>Select First User</option>
            {Object.keys(userList).map((item) => (
              <option key={item} value={item}>
                {`[${item}] ${userList[item]}`}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
        <Form.Group className="my-3">
          <Form.Select
            value={secondUser}
            onChange={(e) => setSecondUser(e.target.value)}
            disabled={!firstUser}
          >
            <option>Select Second User</option>
            {firstUser &&
              Object.keys(userList).map(
                (item) =>
                  firstUser !== item &&
                  userConnections[firstUser].indexOf(item) === -1 && (
                    <option key={item} value={item}>
                      {`[${item}] ${userList[item]}`}
                    </option>
                  )
              )}
          </Form.Select>
        </Form.Group>
        <Button
          onClick={handleClick}
          disabled={!(firstUser && secondUser)}
          className="w-100"
        >
          Connect
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ConnectUsersForm;
