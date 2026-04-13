"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const page = () => {
    const [title,setTitle] =useState("");
    const [content,setContent] =useState("");
    const router = useRouter();

    const handleSubmit = async () => {
    await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        content,
      }),
    });
    router.push("/");
}
  return (
    <div className="container">
        <h1>Create Post</h1>
        <div>
         <input
        type="text"
        placeholder="Enter title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
        </div>
      <br /><br />
    <div className="form-group">
      <textarea
        placeholder="Enter content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
    </div>
    
            <br /><br />

    <button onClick={handleSubmit}>Add Post</button>
    </div>
  )
}

export default page