import React, { useContext, useState } from "react";
import {Navigate} from "react-router-dom"
import { Usercontext } from "../Usercontext";


function Loginpage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [redirect,setRedirect] = useState(false)
  const {setUserInfo} = useContext(Usercontext)

 async function login (e){
e.preventDefault()
 const response =  await fetch("http://localhost:4000/login",{
  method:"POST",
  body:JSON.stringify({username,password}),
  headers:{'Content-Type':'application/json'},
  credentials:"include"
})
if(response.ok){
  response.json().then(userInfo =>{
setUserInfo(userInfo)
    setRedirect(true)
  })

}else{
  alert("wrong information")
}

}

if(redirect){
  return <Navigate to={'/'}/>
}

  return (
    <div>
      <form className="login" onSubmit={login}>
        <h1>Login</h1>
        <input
          type="text"
          name=""
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="username"
        />
        <input
          type="text"
          name=""
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
        <button>Login</button>
      </form>
    </div>
  );
}

export default Loginpage;
