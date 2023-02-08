import React from 'react';
import Login from './MyComponents/Login';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './MyComponents/Home';
import Layout from './MyComponents/Layout';
function App() {
  const fun = () => {
    <Login/>
  }
 
  return (
    <>
    
        

      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
        </BrowserRouter>


      <>
      <h1>Hello</h1>
      </>
        
        
    </>

  );
}

export default App;
