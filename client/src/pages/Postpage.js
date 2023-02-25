import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Usercontext } from "../Usercontext";

function Postpage() {
  const {userInfo} = useContext(Usercontext)
  const [postInfo, setPostInfo] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:4000/createpost/${id}`).then((response) => {
      response.json().then((postInfo) => {
        setPostInfo(postInfo)
      });
    });
  },[]);
console.log(postInfo)

if(!postInfo) return " "
  return( 
<div className="post-page">
<h1>{postInfo.title}</h1>
    <div className="author">by {postInfo.author.username}</div>
{userInfo.id === postInfo.author._id && (
  <div className="edit-row">
    <Link to={`/edit/${postInfo._id}`} className="edit-btn" href="http://">Edit this post</Link>
  </div>
)}
    <div className="image">
    <img src={`http://localhost:4000/`+postInfo.cover} alt="" srcset="" />

    </div>
   
    <div className="content" dangerouslySetInnerHTML={{__html:postInfo.content}}/>
  </div>
  )
}

export default Postpage;
