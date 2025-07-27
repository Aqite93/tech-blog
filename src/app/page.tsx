import Link from "next/link";
import { getAllPosts } from "@/lib/posts"

export default function Home() {
  const posts = getAllPosts();

  const categories = [...new Set(posts.map(post => post.category))];

  return (
    <main style={{ padding: "2rem" }}>
      <h1>🙎自己紹介</h1>
      <p>
        <a href={`/tech-blog/about/`}>こちら</a>
      </p>

      {categories.map(cat => (
        <div key={cat}>
          <h1>📁 {cat}</h1>
          <ul>
            {posts.filter(p => p.category === cat).map(post => (
              <li key={post.slug}>
                <Link href={`/posts/${post.slug}`}>
                  {post.title} ({post.date})
                </Link>
                <div>🏷 {post.tags.join(", ")}</div>
              </li>
            ))}
          </ul>
        </div>
      ))}

    </main>
  );
}
