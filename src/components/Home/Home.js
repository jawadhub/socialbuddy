import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';

const Home = () => {

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then(res => res.json(res))
    .then(data => setPosts(data))
  }, []) 

  return (
    <div>
      <h1>This is home</h1>
      <h4>I have total {posts.length} posts</h4>
      {
        posts.map(post => <Post post={post}></Post>)
      }

    </div>
  );
};

export default Home;