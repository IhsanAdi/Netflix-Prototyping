import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navigation extends Component {
    render(){
        return(
            <div id="navigation" className="Navigation">
                {/* <nav> */}
                        <Link to="/browse" className="nav-link">Browse</Link>  {/* coba bikin browsenya beda buat searching movie */}
                        <Link to="/tv-series" className="nav-link">TV Series</Link>
                        <Link to="/film" className="nav-link">Film</Link>
                        {/* Newer */}
                        <Link to="/my-list" className="nav-link">My List</Link>
                        <Link to="/recent-search" className="nav-link">Recent</Link>
                {/* </nav> */}
            </div>
        )
    }
}

export default Navigation;
