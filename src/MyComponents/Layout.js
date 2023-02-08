import React from 'react'
import { Outlet, Link } from "react-router-dom";
const Layout = () => {
  return (
    <>
    <nav>
    <li><Link to="/home">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
    </nav>
    </>
  )
}

export default Layout
