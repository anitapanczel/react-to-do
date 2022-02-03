import { useState } from 'react';
import './App.css';

function App() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  
  /* ***ADD NEW BLOGPOST*** */
  
  const addBlogPost = () => {
    setBlogPosts([
      ...blogPosts,
      {title: title, content: content, date: new Date().toString()}
    ]);
    setTitle("");
    setContent("");
  }
  
  /* ***DELETE ALL BLOGPOST*** */
  
  const deleteBlogPosts = () => {
    setBlogPosts([])
  }
  
  /* ***REMOVE A POST*** */
  
  const removeBlogPost = (date) => {
    
    /* EZ HELYETT CSINÁLTUK A FILTERT
    
    const newList = [];
    for (const post of blogPosts) {
      if (post.date !== date) {
        newList.push(post);
      }
    }
    setBlogPosts(newList);
    */
   
   setBlogPosts(blogPosts.filter((post) => post.date !== date));
  }
  
  /* ***EDIT POST*** */
  
  const editBlogPost = (date, editTitle, editContent) => {
    const currentList = blogPosts;
    const nextList = [];
    for (const post of currentList) {
      if (post.date !== date) {
        nextList.push(post);
      } else {
        nextList.push(
          {title: editTitle, content: editContent, date: post.date }
          );
        }
      }
      setBlogPosts(nextList);
    }
    
  /* ÚJ ARTICLE KOMPONENS */
  
    const BlogPost = ({blogPost, editBlogPost, removeBlogPost}) => {

      const [editTitle, setEditTitle] = useState("");
      const [editContent, setEditContent] = useState("");
      
      return (
        <article>
        <h1>{blogPost.title}</h1>
        <div>{blogPost.content}</div>
        <h5>{blogPost.date}</h5>
        <input type="text" placeholder="Title" value={editTitle} onChange={(event) => setEditTitle(event.target.value)}/>
        <input type="text" placeholder="Content" value={editContent} onChange={(event) => setEditContent(event.target.value)} />
        <button onClick={() => {
          editBlogPost(blogPost.date, editTitle, editContent);
          setEditTitle("");
          setEditContent("");
        }}
        >Edit</button>
        <button>Save</button>
        <button>Cancel</button>
        <button onClick={() => removeBlogPost(blogPost.date)}>Remove</button>
      </article>
    );

  };


  return (
    <main className="container">

      <input type="text" placeholder="Title" value={title} onChange={(event) => setTitle(event.target.value)}/>

      <input type="text" placeholder="Content" value={content} onChange={(event) => setContent(event.target.value)}/>

      <button onClick={addBlogPost}>Add</button>

      <h1>Posztok</h1>
      {blogPosts.map((blogPost, index) => (
        <BlogPost key={index} blogPost={blogPost} editBlogPost={editBlogPost} removeBlogPost={removeBlogPost} />
      ))}
       <button onClick={deleteBlogPosts}>Delete all posts</button>
    </main>
  );
}

export default App;
