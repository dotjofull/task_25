export async function generateMetadata(props) {
    const {id}= await props.params
    const res = await fetch(
    "http://localhost:3000/api/posts",{cache:"no-store"}
  );

    const posts = await res.json();
    console.log(posts);
    
    const post = posts.find((p) => p.id == id);
    return{
        title : post.title,
        description: post.content,
    };

} 



const page = async (props) => {
    const {id}= await props.params
    const res = await fetch(
    "http://localhost:3000/api/posts",
    { cache: "no-store" }
  );
    const posts = await res.json();
    const post = posts.find((p) => p.id == id);

  return (
  <div className="container">
      <h1>{post.title}</h1>
      <p className="post-text">{post.content}</p>
    </div>
  )
}

export default page