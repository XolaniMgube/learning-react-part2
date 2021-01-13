/** @format */

import { useState, useEffect } from "react";
import BlogsList from "./BlogsList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null)

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/blogs")
        .then((res) => {
          if (!res.ok) {
            throw Error('could not fetch the data from that end point')
          }
          return res.json();
        })
        .then((data) => {
          setBlogs(data);
          setIsPending(false);
          setError(null)
        }).catch(err => {
          setError(err.message)
          setIsPending(false)
        })
    }, 2000);
  }, []);

  return (
    <div className="home">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blogs && <BlogsList blogs={blogs} title={"All Blogs!"} />}
    </div>
  );
};

export default Home;
