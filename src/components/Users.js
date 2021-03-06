import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../redux/actions';
import User from './User';

const Users = () => {
    const dispatch = useDispatch();

    const users = useSelector( state => state.users.users.data)
    
    useEffect(()=>{
        dispatch(fetchUsers())
    },[])

    return (
        <div style={{display: 'flex',flexWrap:'wrap'}}>
            {users.map((user)=><div>
                <User user={user} />
            </div>)}
        </div>
    )
}

export default Users;