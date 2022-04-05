import BlogList from "../Components/BlogList";

const Home = () => {
    return (
        <div className="ui container" style={{marginTop:'25px'}}>
            <div className="ui container">
                <div className="header" style={{fontWeight:'bold'}}>New Blogs</div>
                <BlogList />
            </div>
            <div className="ui container" style={{marginTop:'25px'}}>
                <div className="header" style={{fontWeight:'bold'}}>New Blogs</div>
                <BlogList />
            </div>
        </div>
     );
}
 
export default Home;