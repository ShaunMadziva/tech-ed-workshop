import { useState, useEffect } from "react";

export default function BlogList() {
  //
  const [postsArray, setPosts] = useState([]);

  useEffect(() => {
    async function fetchBlogPosts() {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts`
        );
        const posts = await response.json();
        console.log(posts);
        setPosts(posts);
      } catch (error) {
        console.log(error);
      }
    }
    fetchBlogPosts();
  }, []);

  return (
    <div>
      {postsArray.map((post) => {
        return (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        );
      })}
    </div>
  );
}
