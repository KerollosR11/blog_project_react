import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Post from './Post';

export default function AllPosts() {


    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
          const x  = await axios.get("http://localhost:3000/posts").then(({data})=>setPosts(data));
          
        };
        fetchData();
      }, []);
      // console.log(posts);

    
  return (
    <>
        <div className=' flex flex-col justify-center items-center mx-auto'>
            
            {/* <div>hi</div> */}
                {posts.map((post) => (
                <Post
                  key={post.id}
                    id = {post.id}
                    image = {post.image}
                    username = {post.username}
                    desc = {post.desc}
                    title={post.title}
                />
                ))}
            
        </div>
    </>
    

  )
}
