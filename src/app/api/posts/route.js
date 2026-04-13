import { NextResponse } from "next/server";

let posts = [
  {
    id: 1,
    title: "My First Post",
    content: "This is my first  post.",
  },
  {
    id: 2,
    title: "building website",
    content: "I am building a website ",
  },
  {
    id: 3,
    title: "post 3 ",
    content: "no content , this is test",
  },
];


export const GET = async () => {
   
  return NextResponse.json(posts);
};

export const POST = async (req)=>{
 const body = await req.json();
 
 const newPost = {
    id: posts.length + 1,
    title: body.title,
    content: body.content,
  };
  posts.push(newPost);

  return NextResponse.json(newPost);

}