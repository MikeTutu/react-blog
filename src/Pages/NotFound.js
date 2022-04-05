import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
       <div className="ui container" style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', marginTop:'40px'}}>
           <h1 style={{fontWeight:'bolder', fontSize:'200px'}}>
               404
           </h1>
           <span>
               page not found
           </span>
           <p>
               Click here to go to the homepage
           </p>
           <span>
               <Link to='/'>HOMEPAGE</Link>
           </span>
       </div>
     );
}
 
export default NotFound;