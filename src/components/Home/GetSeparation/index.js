import React, { Fragment, useState } from "react";
import { Col, Card, Form, Button } from "react-bootstrap";

const GetSeparation = ({ userList, userConnections }) => {
  const [firstUser, setFirstUser] = useState("");
  const [secondUser, setSecondUser] = useState("");
  const [availablePaths, setAvailablePaths] = useState(null);

  const handleClick = () => {
    let queue = [],
      path = [],
      avPaths = [];

    path.push(firstUser);
    queue.push(path);
    while (queue.length > 0) {
      path = queue[0];
      queue.shift();
      let last = path[path.length - 1];
      if (last === secondUser) {
        avPaths.push(
          path.reduce((total, item) => {
            return total ? total + " > " + userList[item] : userList[item];
          }, "")
        );
      }
      for (var i = 0; i < userConnections[last].length; i++) {
        if (path.includes(userConnections[last][i]) !== -1) {
          var newpath = [...path];
          newpath.push(userConnections[last][i]);
          queue.push(newpath);
        }
      }
    }
    setAvailablePaths(avPaths);
  };

  return (
    <Fragment>
      <Col md={{ span: 6, order: 2 }} lg={{ span: 4, order: 1 }} xxl={3}>
        <Card className="shadow">
          <Card.Body>
            <Card.Title className="text-center">Get Separation</Card.Title>
            <Form.Group className="my-3">
              <Form.Select
                value={firstUser}
                onChange={(e) => {
                  setFirstUser(e.target.value);
                  setSecondUser("");
                  setAvailablePaths(null);
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
                onChange={(e) => {
                  setSecondUser(e.target.value);
                  setAvailablePaths(null);
                }}
                disabled={!firstUser}
              >
                <option>Select Second User</option>
                {firstUser &&
                  Object.keys(userList).map(
                    (item) =>
                      firstUser !== item && (
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
              Get Separation
            </Button>
          </Card.Body>
        </Card>
      </Col>

      <Col
        xs={{ order: 1 }}
        md={{ span: 6, order: 3 }}
        lg={{ span: 4, order: 3 }}
        xxl={3}
      >
        <Card className="snv-home--deg-of-seperation h-100 shadow">
          <Card.Body>
            <Card.Title className="text-center">
              Degree of Separation
            </Card.Title>
            <div className="py-3">
              {firstUser && secondUser && availablePaths ? (
                <>
                  {availablePaths.length > 0 ? (
                    <ul className="text-success">
                      {availablePaths.map((item, index) => {
                        return <li key={index}>{item}</li>;
                      })}
                    </ul>
                  ) : (
                    <div className="text-center text-danger">
                      Selected Users are Not Connected
                    </div>
                  )}
                </>
              ) : (
                <div className="text-center text-muted">
                  Please select users and Click on Get Separation.
                </div>
              )}
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Fragment>
  );
};

export default GetSeparation;
