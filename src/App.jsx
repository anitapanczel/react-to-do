import { useState } from 'react';
import './App.css';

function App() {
  const [blogPosts, setBlogPosts] = useState([]);
  
  const addBlogPost = () => {
    setBlogPosts([
      ...blogPosts,
      {title: "Cím 4", content: "Ez a cikk szövege 4", date: "2022.02.03."}
    ])
  }

  return (
    <main className="container">
      <input type="text" placeholder="Title"/>
      <input type="text" placeholder="Content"/>
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
    </main>
  );
}

export default App;
