import { Link } from "react-router-dom";

const NavBar = () => {
    return ( 
        <nav>
            <div className="ui inverted segment">
                <div className="ui inverted secondary pointing menu">
                    <Link  to="/" className="item">
                        Home
                    </Link>
                    <Link to="About" className="item">
                        About
                    </Link>
                    <Link to="Create" className="item" style={{paddingBottom:'8px'}}>
                        <input className="ui primary button" type="button" value="Create" />
                    </Link>
                </div>
            </div>
        </nav>
     );
}
 
export default NavBar;