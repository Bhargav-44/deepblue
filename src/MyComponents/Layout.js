import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      
        <ul>
          <li>
            <Link to="/login">login</Link>
          </li>
          <li>
            <Link to="/Header">Remaining</Link>
          </li>
          <li>
            <Link to="/voice">Microphone</Link>
          </li>
          <li>
            <Link to="/count">Count</Link>
          </li>
          <li>
            <Link to="/file">File</Link>
          </li>
        </ul>
      

      <Outlet />
    </>
  )
};

export default Layout;