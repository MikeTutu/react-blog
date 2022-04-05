import { Link } from "react-router-dom";

const BlogList = () => {
    return (
        <div className="ui stackable four column grid">
            <div className="column">
                <Link className="ui card" style={{marginLeft:"40px",marginTop:"40px"}} to="/blog-details">
                    <div className="content">
                        <div className="header">Cute Dog</div>
                        <div className="meta">
                        <span className="category">Animals</span>
                        </div>
                        <div className="description">
                        <p></p>
                        </div>
                    </div>
                    <div className="extra content">
                        <div className="right floated author">
                            <img className="ui avatar image" alt="author" src="https://www.kindpng.com/picc/m/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png" /> Matt
                        </div>
                    </div>
                </Link>
            </div>
        </div>
      );
}
 
export default BlogList;