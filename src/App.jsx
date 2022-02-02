import { useState } from 'react';
import './App.css';

function App() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  
  /* Add new blogpost */

  const addBlogPost = () => {
    setBlogPosts([
      ...blogPosts,
      {title: title, content: content, date: new Date().toString()}
    ]);
    setTitle("");
    setContent("");
  }

  /* Delete all blogpost */

  const deleteBlogPosts = () => {
    setBlogPosts([])
  }
 
  return (
    <main className="container">

      <input type="text" placeholder="Title" value={title} onChange={(event) => setTitle(event.target.value)}/>

      <input type="text" placeholder="Content" value={content} onChange={(event) => setContent(event.target.value)}/>

      <button onClick={addBlogPost}>Add</button>

      <h1>Posztok</h1>
      {blogPosts.map((blogPost, index) => (
        <article key={index}>
          <h1>{blogPost.title}</h1>
          <div>{blogPost.content}</div>
          <h5>{blogPost.date}</h5>
          <input type="text" placeholder="Title"/>
          <input type="text" placeholder="Content" />
          <button>Edit</button>
          <button>Save</button>
          <button>Cancel</button>
          <button>Remove</button>
        </article>
      ))}
       <button onClick={deleteBlogPosts}>Delete all posts</button>
    </main>
  );
}

export default App;
