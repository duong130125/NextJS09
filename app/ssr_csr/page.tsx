"use client";
import { useEffect, useState } from "react";

interface Post {
  id: number;
  title: string;
  body: string;
}

export default function Page() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [refresh, setRefresh] = useState(false);

  const fetchPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    setPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, [refresh]);

  const refreshPosts = () => {
    setRefresh(!refresh);
  };

  return (
    <div>
      <h1>Danh sách Bài viết với Refresh</h1>
      <button onClick={refreshPosts} className="border text-gray-500">
        Refresh
      </button>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <b>{post.title}</b>
            <p>{post.body.slice(0, 100)}...</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
