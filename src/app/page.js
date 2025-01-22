import React from "react";
import PostCard from "./components/PostCard";

const Home = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  console.log(data);

  return (
    <div>
      <h1 className="uppercase text-center font-bold my-4 ">homepage</h1>
      <div className="grid grid-cols-3 gap-4 container mx-auto">
        {data.slice(0,6).map((item) => (
          <>
            <PostCard title={item.title} body={item.body} />
          </>
        ))}
      </div>
    </div>
  );
};

export default Home;
