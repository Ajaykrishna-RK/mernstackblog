import React, { useContext, useEffect, useState } from 'react'
import { json, Link, Navigate } from 'react-router-dom'
import { Usercontext } from '../Usercontext'




function Header() {
const {userInfo,setUserInfo} = useContext(Usercontext)



useEffect(()=>{
fetch("http://localhost:4000/profile",{
  credentials:'include'

}).then((response)=>{
  response.json().then(userInfo =>{
console.log(userInfo)
setUserInfo(userInfo)
  })
})

},[])



function logout(){
  fetch("http://localhost:4000/logout",{
    method:'POST',
    credentials:'include'
  })
  setUserInfo(null)
  
}

const username = userInfo?.username

  return (
    <header>
    <Link to="/" className='logo'>MyBlog</Link>

{username ? (
  <>
   <Link to="/create">Create new Post</Link>
     <a onClick={logout}>Logout</a>
  </>
    
) :(
<nav>
      <Link to="/login">Login</Link>
      <Link to="/register" >Register</Link>
    </nav>
)}


    
  </header>
  )
}

export default Header