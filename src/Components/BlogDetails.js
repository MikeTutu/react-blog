const BlogDetails = () => {
    return ( 
        <div className="ui container" style={{marginTop:'50px'}}>
            <h5 className="header">Blog Title</h5>
            <div className="card" style={{marginBottom:'20px'}}>
                <div className="ui avatar image" style={{marginRight:'10px'}}>
                    <img src="https://www.kindpng.com/picc/m/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png" alt="avatat"/>
                </div>
                <span className="ui sub header">Author</span>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius vitae, eum enim doloremque
                 facere beatae quam quod quis tempore numquam nisi ut iure optio, nostrum doloribus eaque itaque! Esse, natus
                 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo sed provident ratione modi tempora incidunt quas, 
                 deserunt officia culpa sequi nisi assumenda consequatur quod ipsa fugit eaque reiciendis officiis eveniet.
            </p>
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
        </div>
     );
}
 
export default BlogDetails;