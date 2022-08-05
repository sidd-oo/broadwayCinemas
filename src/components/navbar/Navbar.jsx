import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

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
                        <div className="navIconTitle">
                            <img src={logo} className="navIcon" alt="BroadwayCinema logo" />
                            <span className="navTitle">BROADWAY CINEMAS</span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;