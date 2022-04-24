import { Link } from "react-router-dom";

const BlogList = ({blogs}) => {
    console.log(blogs[0].id)
    return (
            <div className="foun column doubling ui grid">
                {blogs.map((blog)=>(
                    <Link className="ui card" style={{marginLeft:"40px",marginTop:"40px"}} key={blog.id} to={`/blog-details/${blog.id}`}>
                        <div className="content">
                            <div className="header">{blog.title}</div>
                            <div className="meta">
                            <span className="category">Animals</span>
                            </div>
                            <div className="description">
                            <p></p>
                            </div>
                        </div>
                        <div className="extra content">
                            <div className="right floated author">
                                <img className="ui avatar image" alt="author" src="https://www.kindpng.com/picc/m/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png" /> {blog.author}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
      );
}
 
export default BlogList;