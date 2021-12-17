import React, { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";

const AddUserForm = ({ newUserId, addNewUser }) => {
  const [value, setValue] = useState("");

  const handleClick = () => {
    addNewUser(value);
    setValue("");
  };

  return (
    <Card className="shadow">
      <Card.Body>
        <Card.Title className="text-center">Add User</Card.Title>
        <Form.Group className="my-3">
          <Form.Control
            placeholder="Enter name"
            value={`ID - ${newUserId}`}
            readOnly
          />
        </Form.Group>
        <Form.Group className="my-3">
          <Form.Control
            placeholder="Enter name"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </Form.Group>
        <Button className="w-100" onClick={handleClick} disabled={!value}>
          Add
        </Button>
      </Card.Body>
    </Card>
  );
};

export default AddUserForm;
