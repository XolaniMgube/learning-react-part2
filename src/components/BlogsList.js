/** @format */

const BlogsList = ({blogs, title}) => {
  
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
          <p>{blog.body}</p>
          <br />
          <br />
        </div>
      ))}
    </div>
  );
};

export default BlogsList;
