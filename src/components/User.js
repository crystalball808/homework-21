import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

export default function User({ user }) {
  return (
    <Card bg='primary' text='light' style={{width:'20rem',height:'10rem'}}>
      <Container>
        <Row>
          <Col>
            <Image src={user.avatar} roundedCircle style={{ width: 100 }} />
          </Col>
          <Col>
            <Card.Header>{user.name}</Card.Header>
            <Card.Body>
            <Card.Title>{user.username}</Card.Title>
            </Card.Body>
          </Col>
        </Row>
      </Container>
    </Card>
  );
}
