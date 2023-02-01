// import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
// import Todos from './MyComponents/Todos';
// import Footer from './MyComponents/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './MyComponents/Login'
import Layout from './MyComponents/Layout'
import Voice from './MyComponents/Voice'
import Count from './MyComponents/Count'



function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout />}>
      <Route path="Login" element={<Login />} />
      <Route path="Header" element={<Header />} />
      <Route path="Voice" element={<Voice/>}/>   
      <Route path="Count" element={<Count/>}/> 
        </Route>
      </Routes>
    </BrowserRouter>
  
    
  );
}

export default App;
