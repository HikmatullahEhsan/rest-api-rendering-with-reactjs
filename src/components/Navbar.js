import React from 'react';
import './Navbar.css';
import {
    BrowserRouter,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import Content from '../pages/Content';
import EventDetails from '../pages/EventDetails';
import Home from '../pages/Home';
class Navbar extends React.Component {

    render(){
        return (
            <BrowserRouter>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">Smarkets </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                               <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/events">Events</Link>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2 search-input-panel " type="search" placeholder="Events, Markets or Contracts" aria-label="Search" />
                        </form>
                    </div>
                    <a id="header-signup" className="header-item -primary-button" data-tag-manager-id="header-signup" href="#">Create account</a>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="events"  element={<Content />}>
                        <Route path=":id" element={<EventDetails />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        );
    }
}

export default Navbar;