import React from "react";
import Graph from "react-graph-vis";
import { Card } from "react-bootstrap";

const NetworkGraph = ({ network: { key, graph } }) => {
  return (
    <Card className="snv-home--network-visualizer shadow">
      <Card.Body>
        <Card.Title className="text-center">Network Visualizer</Card.Title>
        <Graph key={key} graph={graph} style={{ height: "400px" }} />
      </Card.Body>
    </Card>
  );
};

export default NetworkGraph;
