import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Users from './components/Users';
import addUser from './components/AddUser'

function App() {
  return (
    <Router>
      <Navbar bg='dark' expand='lg'>
        <NavLink to='/'>
          <img
            src='https://hackernoon.com/hn-images/1*VeM-5lsAtrrJ4jXH96h5kg.png'
            height='30'
            className='d-inline-block align-top'
            alt='React Redux logo'
          />
        </NavLink>
        <NavLink to='/users'>Users</NavLink>
        <NavLink to='/addUser'>Add user</NavLink>
      </Navbar>
      <Route path='/users' component={Users} />
      <Route path='/addUser' component={addUser} />
    </Router>
  );
}

export default App;
