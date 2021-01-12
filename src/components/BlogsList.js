/** @format */

const BlogsList = ({blogs, title, deleteBlog}) => {
  
  return (
    <div className="blogslist">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>
            written by: <i>{blog.author}</i>
          </p>
          <hr />
          <p>{blog.article}</p>
          <button onClick={() => deleteBlog(blog.id)}>Delete Blog</button>
          <br />
          <br />
        </div>
      ))}
    </div>
  );
};

export default BlogsList;
