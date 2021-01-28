import React from 'react'
import { useSelector } from 'react-redux'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

export default function Tweet ({tweet}) {
    const users = useSelector( state => state.users.users.data);
    const user = users.find(user => user.id === tweet.userId)
    return (
        <Card style={{width:'30rem',height:'auto'}}>
            <Container fluid>
                <Row>
                    <Col md={2}>
                        <Image fluid roundedCircle src={user.avatar} style={{width: 100}} />
                    </Col>
                    <Col md={10}>
                        <Card.Title>
                            {user.name}
                        </Card.Title>
                        <Card.Subtitle>
                            {user.username}
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