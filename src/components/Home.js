/** @format */

import { useState } from "react";

const Home = () => {

  const [blogs, setBlogs] = useState([
    {
      title: "Mr Good Books",
      author: "Xolani",
      article: " lorem ipsum is the iss lorem lorem ipsum is the iss lorem lorem ipsum is the iss lorem lorem ipsum is the iss lorem",
      id: 1,
    },
    {
      title: "Saw it all",
      author: "Njabulo",
      article: " lorem ipsum is the iss lorem lorem ipsum is the iss lorem lorem ipsum is the iss lorem lorem ipsum is the iss lorem",
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
  


  return (
    <div className="home">
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>
            written by: <i>{blog.author}</i>
          </p>
          <hr />
          <p>{blog.article}</p>
          <br/><br/>
        </div>
      ))}
    </div>
  );
};

export default Home;
