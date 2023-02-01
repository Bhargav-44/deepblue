import React from 'react'
import PropTypes from 'prop-types'
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

export default function Header(props) {
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();
  
  const Button = styled.button`
  background-color: black;
  color: white;
  font-size: 15px;
  // padding: 10px 40px;
  width: 70px;
  height: 40px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
`;


  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
    <a className="navbar-brand" href="#">WMS</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        
        </li>
      
      </ul>
      {isAuthenticated ? (
          <li>
          <Button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
        Log Out
      </Button>
          </li>

        ) : (
          <li>
          <Button onClick={() => loginWithRedirect()}>Log In</Button>
        </li>
        )}
      
      {isAuthenticated && (
      <div >
        {/* <p style={{fontSize: 25}}>{user.name}</p> */}
        <p style={{paddingTop:10,paddingLeft:10}}>{user.email}</p>
      </div>
    )}
    </div>
  </div>
</nav>
    </div>
  )
}

Header.propTypes = {
    title:PropTypes.string
}