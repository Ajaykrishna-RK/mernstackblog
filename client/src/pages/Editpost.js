import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import { Navigate, useParams } from "react-router-dom";

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

function Editpost() {
  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState("");
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:4000/createpost/${id}`).then((response) => {
      response.json().then((postInfo) => {
        setTitle(postInfo.title);
        setContent(postInfo.content);
        setSummary(postInfo.summary);
      });
    });
  }, []);

  const updatePost = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("title", title);
    data.append("summary", summary);
    data.append("id",id)
    data.append("content", content);
    if (files?.[0]) {
      data.append("file", files?.[0]);
    }

    await fetch("http://localhost:4000/createpost", {
      method: "PUT",
      body: data,
      credentials:'include'
    });
    setRedirect(true);
  };

  if (redirect) {
    return <Navigate to={"/"} />;
  }
  return (
    <div>
      <h1>Edit page</h1>
      <form onSubmit={updatePost}>
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

export default Editpost;
