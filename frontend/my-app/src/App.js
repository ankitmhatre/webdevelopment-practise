import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
const [uname, setUserName]  = useState("");
const [pass, setPass]  = useState("");
const [msg, setMsg]  = useState("Please login");

  function login(e){
    e.preventDefault();


    


    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "username": uname,
  "password": pass
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://0797-2600-4041-4223-9600-f410-f351-b31f-125b.ngrok.io", requestOptions)
  .then(response => response.text())
  .then(result => setMsg(result))
  .catch(error => console.log('error', error));




  }
  return (
    <div className="App">
      <center>
      <form onSubmit={login}>

  
        <input name="username" placeholder='Username' value={uname} onChange={(e)=>{
setUserName(e.target.value)
        }}/> 
        <br />
        <input name="password" placeholder='password' 
        value={pass} onChange={(e)=>{
setPass(e.target.value)
        }}
        type="password"  />


        <br />

        <input type="submit" />
        </form>
        <span>{msg}</span>
      </center>
    </div>
  );
}

export default App;
