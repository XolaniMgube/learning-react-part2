/** @format */

import { useState } from "react";
import BlogsList from "./BlogsList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "Mr Good Books",
      author: "Xolani",
      article:
        " lorem ipsum is the iss lorem lorem ipsum is the iss lorem lorem ipsum is the iss lorem lorem ipsum is the iss lorem",
      id: 1,
    },
    {
      title: "Saw it all",
      author: "Njabulo",
      article:
        " lorem ipsum is the iss lorem lorem ipsum is the iss lorem lorem ipsum is the iss lorem lorem ipsum is the iss lorem",
      id: 2,
    },
    {
      title: "Who run the world",
      author: "Momo",
      article:
        " lorem ipsum is the iss lorem lorem ipsum is the iss lorem lorem ipsum is the iss lorem lorem ipsum is the iss lorem",
      id: 3,
    },
  ]);

  let deleteBlog = (id) => {
    let newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs)
  }

  return (
    <div className="home">
      <BlogsList blogs={blogs} title={"All Blogs!"} deleteBlog={deleteBlog} />
    </div>
  );
};

export default Home;
