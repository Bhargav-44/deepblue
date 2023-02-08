import React from 'react'
import {useState, useEffect} from 'react';

function Welcome(props) {
  // const [user, setUser] = useState({name: "", email: ""});
  const Logout = () => {
    props.user({name:"", email:""});
  }
  return (
    <div className='welcome'>
      <h2>Welcome, <span>{props.name.name}</span></h2>
      <button onClick={Logout}>Logout</button>
    </div>
  )
}

export default Welcome
