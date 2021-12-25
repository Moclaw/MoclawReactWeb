import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./components/Pages/Home/Home";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Blog from "./components/Pages/Blogs/Blog";
import ContactUs from "./components/Pages/Contact/ContactUs";
import Login from "./components/Auth/Login/Login";

function App() {
    return (
        <Router>
            <Navbar/>
            <Switch>
                <Route exact path="/" component={ Homepage}/>
                <Route exact path="/blog" component={Blog} />
                <Route exact path="/contact" component={ContactUs}/>
                <Route exact path="/login" component={Login}/>
            </Switch>
        </Router>
    );
}

export default App;
