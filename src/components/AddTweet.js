import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../redux/actions';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const postTweet = async (e) => {
  e.preventDefault();
  const newTweet = {
    userId: Number(e.target[0].value),
    content: e.target[1].value,
    image: e.target[2].value,
  };
  const response = await fetch('http://domer.tech:9999/tweets/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(newTweet),
  });
  const result = await response.json();
  alert(result.message);
  e.target[0].value = '';
  e.target[1].value = '';
  e.target[2].value = '';
};

const AddTweet = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users.data);
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <Form style={{ width: '32ex' }} onSubmit={postTweet}>
      <Form.Group controlId='nameForm'>
        <Form.Label>Pick user</Form.Label>
        <Form.Control required as='select'>
          {users?.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
      <Form.Group controlId='nicknameForm'>
        <Form.Label>Write you tweet</Form.Label>
        <Form.Control
          required
          as='textarea'
          rows={3}
          style={{ resize: 'none' }}
        />
      </Form.Group>
      <Form.Group controlId='nicknameForm'>
        <Form.Label>Post image</Form.Label>
        <Form.Control required type='url' placeholder='Picture URL' />
      </Form.Group>
      <Button variant='primary' type='submit'>
        Submit
      </Button>
    </Form>
  );
};

export default AddTweet;
