import React, { useState } from "react";
import Scrollspy from "react-scrollspy";

const Header = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if (process.browser) {
            if (window.scrollY >= 71) {
                setNavbar(true);
            } else {
                setNavbar(false);
            }
        }
    };

    if (process.browser) {
        // Client-side-only code
        window.addEventListener("scroll", changeBackground);
    }

    return (
        <>
            <header className={navbar ? "main-header fixed-header" : "main-header"}>
                <nav className="container">
                    <div className=" header-transparent">
                            {/* <img
                                className="navbar-brand"
                                src="img/logo/logo-light.svg"
                                alt="brand logo"
                            /> */}
                            {/* <h2 className="logo-name">Mario Fornaroli</h2> */}
                            <a className="logo-name" href="#home" onClick={handleClick}>Mario Fornaroli</a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            onClick={handleClick}
                        >
                            <div className={click ? "hamburger active" : "hamburger"}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </button>
                        
                        <div
                            className={
                                click
                                    ? "mobile-menu navbar-collapse justify-content-end active"
                                    : "mobile-menu navbar-collapse justify-content-end"
                            }
                        >
                            <Scrollspy
                                className="anchor_nav navbar-nav ml-auto"
                                items={["home", "about", "services", "work", "blog", "contact"]}
                                currentClassName="current"
                                offset={-71}
                            >
                                <li>
                                    <a className="nav-link" href="#home" onClick={handleClick}>
                                        <span>Home</span>
                                    </a>
                                </li>
                                <li>
                                    <a className="nav-link" href="#about" onClick={handleClick}>
                                        <span>My Expertise</span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="nav-link"
                                        href="#services"
                                        onClick={handleClick}
                                    >
                                        <span>My Expertise</span>
                                    </a>
                                </li>
                                <li>
                                    <a className="nav-link" href="#work" onClick={handleClick}>
                                        <span>Portfolio</span>
                                    </a>
                                </li>
                                <li>
                                    <a className="nav-link" href="#blog" onClick={handleClick}>
                                        <span>My Youtube Channel</span>
                                    </a>
                                </li>
                                <li>
                                    <a className="nav-link" href="#contact" onClick={handleClick}>
                                        <span>Contact</span>
                                    </a>
                                </li>
                            </Scrollspy>
                        </div>
                        {/* / */}
                    </div>
                    {/* Container */}
                </nav>
                {/* Navbar */}
            </header>
            {/* End Header */}
        </>
    );
};

export default Header;
