import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(() => false);

    window.onscroll = () => {
        setIsScrolled(() => (window.pageYOffset === 0 ? false : true));
        return () => (window.onscroll = null);
    };

    return (
        <div className={isScrolled === false ? "navbar" : "navbar scrolled"}>
            <div className="container">
                <div className="left">
                    <Link to="/" className="link">
                        <img src="../../assets/images/logo.png" className="navIcon" alt="BroadwayCinema logo"/>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;