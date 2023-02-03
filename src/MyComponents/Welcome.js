import React from 'react'

function Welcome(props) {
  return (
    <div className='welcome'>
      <h2>Welcome, <span>{props.name}</span></h2>
      <button>Logout</button>
    </div>
  )
}

export default Welcome
