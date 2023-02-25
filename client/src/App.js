import React from 'react'
import { Route, Routes } from 'react-router-dom'
import "./App.css"
import Header from './components/Header'
import Layout from './components/Layout'
import Post from './components/Post'
import Createpost from './pages/Createpost'
import Indexpage from './pages/Indexpage'
import Loginpage from './pages/Loginpage'
import Postpage from './pages/Postpage'
import Registerpage from './pages/Registerpage'
import { UserContextProvider } from './Usercontext'
import Editpost from './pages/Editpost'



function App() {
  return (
<UserContextProvider>
<Routes>
<Route path='/' element={<Layout/>}>
<Route index element={<Indexpage/>}/>
<Route path='/login' element={<Loginpage/>}/>
<Route path='/register' element={<Registerpage/>}/>
<Route path='/create' element={<Createpost/>}/>
<Route path='/createpost/:id' element={<Postpage/>}/>
<Route path='/edit/:id' element={<Editpost/>}/>
</Route>
</Routes>
</UserContextProvider>
   
  )
}

export default App