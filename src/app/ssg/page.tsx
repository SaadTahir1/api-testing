import React from "react";

async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5", {
    cache: "force-cache", // Ensures SSG behavior
  });

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  return res.json();
}

export default async function SSGPage() {
  const posts = await getPosts();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">SSG - Statically Generated Posts</h1>
      <ul className="space-y-3">
        {posts.map((post: { id: number; title: string; body: string }) => (
          <li key={post.id} className="border p-3 rounded-md shadow">
            <h2 className="text-lg font-semibold">{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
