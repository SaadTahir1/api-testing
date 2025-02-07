import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from "react";

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
    const posts = await res.json();
  
    return { props: { posts } };
  }
  
  export default function SSGPage({ posts }: { posts: any }) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">SSG - Statically Generated Posts</h1>
        <ul className="space-y-3">
          {posts.map((post: { id: Key | null | undefined; title: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; body: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; }) => (
            <li key={post.id} className="border p-3 rounded-md shadow">
              <h2 className="text-lg font-semibold">{post.title}</h2>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  