import React, { useState } from "react";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";

import {Navigate} from "react-router-dom"
const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image"],
    ["clean"],
  ],
};

function Createpost() {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState("");
  const [redirect ,setRedirect] = useState(false)

  const createNewPost = async(e) => {
    e.preventDefault();
    const data = new FormData();

    data.append("title", title);
    data.append("summary", summary);
    data.append("content", content);
    data.append("file",files[0])

    console.log(files);
 const response = await fetch("http://localhost:4000/createpost",{
      method:"POST",
      body:data,
      credentials:'include'
    })

    
    if(response.ok){
     return setRedirect(true)
    }
  };

  if(redirect){
 alert("success")
  }


  return (
    <div>
      <h1>create page</h1>
      <form onSubmit={createNewPost}>
        <input
          type="title"
          name=""
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder={"Title"}
        />
        <input
          type="summary"
          name=""
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          placeholder={"Summary"}
        />
        <input type="file" onChange={(e) => setFiles(e.target.files)} />
        <ReactQuill
          modules={modules}
          value={content}
          onChange={(newValue) => setContent(newValue)}
        />

        <button style={{ marginTop: "5px" }}>Create Post</button>
      </form>
    </div>
  );
}

export default Createpost;
