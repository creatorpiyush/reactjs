import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

export default function UserCard({ user }) {
  return (
    <div>
      <Container fluid="sm" className="pt-5">
        <Row>
          <Col>
            <Card border="danger" style={{ width: "18rem" }}>
              <Card.Header>User Profile</Card.Header>
              <Card.Img variant="top" src={user.avatar_url} />
              <Card.Body>
                <Card.Title>{user.name}</Card.Title>
                <Card.Text>{user.bio}</Card.Text>
                <a href={user.html_url} rel="noreferrer" target="_blank">
                  <Button variant="success">Go To User Profile</Button>
                </a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
