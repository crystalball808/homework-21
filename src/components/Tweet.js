import React from 'react'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

export default function Tweet ({tweet, user}) {
    return (
        <Card bg='dark' text='white' style={{width:'25rem',height:'auto'}}>
            <Container fluid>
                <Row>
                    <Col md={3}>
                        <Image fluid roundedCircle src={user?.avatar}  />
                    </Col>
                    <Col md={9}>
                        <Card.Title>
                            {user?.name}
                        </Card.Title>
                        <Card.Subtitle>
                            {user?.username}
                        </Card.Subtitle>
                    </Col>
                </Row>
                <Row>
                    <Col md={{span: 10, offset:2}} >
                    <Card.Body>
                            <Card.Text>{tweet.content}</Card.Text>
                            <Image fluid src={tweet.image} style={{height: '150px'}} />
                        </Card.Body>
                    </Col>
                </Row>
            </Container>
        </Card>
    )
}