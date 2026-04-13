import Link from "next/link";

const HomePage = async () => {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });

  const posts = await res.json();

  return (
    <div className="container">
      <h1>Blog Home</h1>

      {posts.map((post) => (
        <div key={post.id} className="post-card">
          <h2 className="post-title">{post.title}</h2>
          <p className="post-text">{post.content}...</p>
          <Link className="post-link" href={`/posts/${post.id}`}> <button>Read More</button></Link>
          <hr/>
        </div>
      ))}
    </div>
  );
};

export default HomePage;