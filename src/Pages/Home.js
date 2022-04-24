import BlogList from "../Components/BlogList";
import useFetch from "../Hooks/useFetch";

const Home = () => {
    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');
    
    return (
        <div className="ui container" style={{marginTop:'25px'}}>
            {error && (
                <div class="ui negative message">
                    <div class="header">
                    {error}
                    </div>
                </div>
            )}
            {isPending && (
                <div classNmae="ui segment" style={{display:'flex', flexDirection:"row", alignItems:'center', justifyContent:'center'}}>
                    <div classNmae="ui large text loader" >Loading...</div>
                </div>
            )}
            <div className="header" style={{fontWeight:'bold', fontSize:'20px', marginLeft:'26px'}}>Public Blogs</div>
            {blogs && (
                    <div className="" style={{display:'flex', flexDirection:'row'}}>
                        <div className="row">
                            <BlogList blogs={blogs.filter((publicBlogs)=>publicBlogs.type==='public')}/>
                        </div>
                    </div>
            )}
            <div className="header" style={{fontWeight:'bold', fontSize:'20px', marginLeft:'26px', marginTop:'80px'}}>Private Blogs</div>
            {blogs && (
                    <div className="" style={{display:'flex', flexDirection:'row'}}>
                        <div className="row">
                            <BlogList blogs={blogs.filter((privateBlogs)=>privateBlogs.type === 'private')}/>
                        </div>
                    </div>
            )}
           
                
        </div>
     );
}
 
export default Home;