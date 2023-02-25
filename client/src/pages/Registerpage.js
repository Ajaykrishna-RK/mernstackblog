import React, { useState } from 'react'

function Registerpage() {

const [username,setUsername] = useState("")
const [password,setPassword] = useState("")





async function register(e){
e.preventDefault() 
const response =  await fetch("http://localhost:4000/register",{
  method:'POST',
  body:JSON.stringify({username,password}),
  headers:{'Content-Type': 'application/json'}
})
console.log(response,"==")

if(response.status === 200){
  alert("Registration Succesfull")
}else{
  alert("Registration Failed")
}

}

  return (
    <form className='register' onSubmit={register}>
        <h1>Register</h1>
<input type="text" name="" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder='username'/>
<input type="text" name="" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='password'/>
<button>Register</button>
    </form>
  )
}

export default Registerpage