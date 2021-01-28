import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

async function postUser (e) {
    e.preventDefault();
    const newUser = {
        name: e.target[0].value,
        username: '@' + e.target[1].value,
        avatar: e.target[2].value
    }
    const response = await fetch('http://domer.tech:9999/users/',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
        body: JSON.stringify(newUser),
    })
    const result = await response.json();
    alert(result.message);
    e.target[0].value = '';
    e.target[1].value = '';
    e.target[2].value = '';
}

const addUser = () => {
    return (
        <Form style={{width: '32ex'}} onSubmit={postUser}>
            <Form.Group controlId='nameForm'>
                <Form.Label>Your name</Form.Label>
                <Form.Control required type='name' placeholder='Example Name' />
            </Form.Group>
            <Form.Group controlId='nicknameForm'>
                <Form.Label>Your nickname</Form.Label>
                <Form.Control required type='nickname' placeholder='Example Nickname' />
            </Form.Group>
            <Form.Group controlId='nicknameForm'>
                <Form.Label>Your avatar</Form.Label>
                <Form.Control required type='url' placeholder='Picture URL' />
            </Form.Group>
            <Button variant='primary' type='submit'>Submit</Button>
        </Form>
    )
}

export default addUser;