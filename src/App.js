import React, {useState} from 'react';
import LoginForm from './MyComponents/LoginForm';
import Voice from './MyComponents/Voice';


function App() {
  const adminUser = {
    email: "email@example.com",
    password: "admin123"
  };

  const [user, setUser] = useState({name: "", email: ""});
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);

    if(details.email == adminUser.email && details.password == adminUser.password){
      console.log("Logged in");
      setUser({
        name: details.name,
        email: details.email
      })
    } else{
      console.log("Details not matched");
      setError("Details not matched");
    }
  }

  const Logout = () => {
    setUser({name:"", email:""});
  }
  return (
    <div className="App">
      <div class="layer1"></div>
      <div class="layer2"></div>
      {(user.email != "") ? (
        <div className='voice'>
          <Voice name={user.name}/>
        </div>
      ) : (
        <LoginForm Login={Login} error={error}/>
      )}
    </div>

  );
}
// edited by me 

// edited by me 
export default App;
