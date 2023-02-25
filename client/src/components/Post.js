import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Post() {

  const [posts,setPosts] = useState([])

useEffect(()=>{
fetch("http://localhost:4000/allposts",{
  method:"GET"
}).then((response)=>{
  response.json().then(posts =>{
 setPosts(posts)
  })
})
},[])

console.log(posts)


  return (
<div>
{posts && posts.map((post)=>(
 <div className='post'>
 <div className='image'>
  <Link to={`/createpost/${post._id}`}>
  <img src={'http://localhost:4000/'+ post?.cover} alt="" />
  </Link>

</div>
<div className='texts'>
<Link to={`/createpost/${post._id}`}>
<h2>{post?.title}</h2>
</Link>

<p className='info'>
 <a  href="/" className='author'>{post?.author.username}</a>
 <time>2023-01-06 16:45</time>
</p>
<p className='summary'>{post?.summary}</p>
</div>
</div>
))}
   

</div>
  )
}

export default Post