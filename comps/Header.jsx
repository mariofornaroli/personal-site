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
                                items={["home", "about", "experience", "education", "myYtChannel", "someProjects", "contact"]}
                                currentClassName="current"
                                offset={-71}
                            >
                                <li className="header-item fake">
                                    <a className="nav-link" href="#home" onClick={handleClick}>
                                        <span>Home</span>
                                    </a>
                                </li>
                                <li className="header-item">
                                    <a className="nav-link" href="#about" onClick={handleClick}>
                                        <span>My Expertise</span>
                                    </a>
                                </li>
                                <li className="header-item">
                                    <a
                                        className="nav-link"
                                        href="#experience"
                                        onClick={handleClick}
                                    >
                                        <span>Experience</span>
                                    </a>
                                </li>
                                <li className="header-item">
                                    <a className="nav-link" href="#education" onClick={handleClick}>
                                        <span>Education</span>
                                    </a>
                                </li>
                                <li className="header-item">
                                    <a className="nav-link hilighted" href="#myYtChannel" onClick={handleClick}>
                                        <span>My Youtube Channel</span>
                                        <img src="/img/hilighted-underline.png"
                                            className="underlined-img" alt="Hilight Youtube Channel underline image" />
                                    </a>
                                </li>
                                <li className="header-item">
                                    <a className="nav-link" href="#someProjects" onClick={handleClick}>
                                        <span>Projects</span>
                                    </a>
                                </li>
                                <li className="header-item fake">
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
