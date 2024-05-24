import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';

const index = () => {

    let [menuOpen, setMenuOpen] = useState(false);

    return (

        <nav className='main-nav'>
            <Link to="/" className="title">
                Website
            </Link>
            <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
                <span className='menu-icon'></span>
                <span className='menu-icon'></span>
                <span className='menu-icon'></span>
            </div>
            <ul className={`unorder-list ${menuOpen ? "open" : ""}`}>
                <li className='order-list'>
                    <NavLink className="nav-link" onClick={() => setMenuOpen(!menuOpen)} to="/">Home</NavLink>
                </li>
                <li className='order-list'>
                    <NavLink className="nav-link" onClick={() => setMenuOpen(!menuOpen)} to="/add-movie">Add Movie</NavLink>
                </li>
                <li className='order-list'>
                    <NavLink className="nav-link" onClick={() => setMenuOpen(!menuOpen)} to="/view-movies">View Movies</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default index;