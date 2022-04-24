import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BlogDetails from "./Components/BlogDetails";
import NavBar from "./Components/NavBar";
import About from "./Pages/About";
import Create from "./Pages/Create";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="ui fluid container">
          <Switch>
            <Route path="/" exact>
              <NavBar />
              <Home />
            </Route>
            <Route path="/Create">
              <NavBar />
              <Create />
            </Route>
            <Route path="/About">
              <NavBar />
              <About />
            </Route>
            <Route path="/blog-details/:id">
              <NavBar />
              <BlogDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
