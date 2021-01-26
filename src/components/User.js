import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

export default function User({ user }) {
  return (
    <Card bg='primary' text='dark' style={{width:'20rem'}}>
      <Container>
        <Row>
          <Col>
            <Image src={user.avatar} roundedCircle style={{ width: 100 }} />
          </Col>
          <Col>
            <Card.Title>{user.name}</Card.Title>
            <p>{user.username}</p>
          </Col>
        </Row>
      </Container>
    </Card>
  );
}
