import { useParams } from "react-router-dom";
import useFetch from "../Hooks/useFetch";
const BlogDetails = () => {
    const {id} = useParams();
    const {data: blog, isPending, error} = useFetch('http://localhost:8000/blogs/'+id);

    console.log(id);

    return ( 
        <div className="ui container" style={{marginTop:'50px'}}>
            {isPending && <div>Loading....</div>}
            {error && (
                <div class="ui negative message">
                    <div class="header">
                    {error}
                    </div>
                </div>
            )}
            {blog && (
                <article>
                <h5 className="header">{blog.title}</h5>
                <div className="card" style={{marginBottom:'20px'}}>
                    <div className="ui avatar image" style={{marginRight:'10px'}}>
                        <img src="https://www.kindpng.com/picc/m/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png" alt="avatat"/>
                    </div>
                    <span className="ui sub header">{blog.author}</span>
                </div>
                <p>{blog.body}</p>
                <div style={{float:'right'}}>
                    <div className="extra content" style={{justifyContent:'space-around'}}>
                        <span className="left floated like" style={{marginRight:'15px'}}>
                            <i className="heart outline icon"></i>
                            Like
                        </span>
                        <span className="right floated comment">
                            <i className="comment outline icon"></i>
                            Comment
                        </span>
                    </div>
                </div>
            </article>
            )}
        </div>
     );
}
 
export default BlogDetails;