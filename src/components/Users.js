import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../redux/actions';
import User from './User';

const Users = () => {
    const dispatch = useDispatch();

    const users = useSelector( state => state.users.users.data)
    dispatch(fetchUsers())
    

    

    return (
        <div>
            {users.map((user)=><div>
                <User user={user} />
            </div>)}
        </div>
    )
}

export default Users;