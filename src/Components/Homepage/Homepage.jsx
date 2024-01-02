import React from 'react';
import './Homepage.css';

const Homepage = ({updateUser}) => {
  return (
    <div className='homepage'>
        <h1>Hello Homebhai</h1>
        <div className="button" onClick={() => {updateUser({})}}>Logout</div>
    </div>
  )
}

export default Homepage