import React, { Component } from "react";
import PicMain from "../assets/pictures/pic.png";

class MyIndex extends Component {
    render() {
        const items = ["HOME", "ABOUT", "APPROACH", "WORK", "BLOG", "CONTACT"];
        const navItems = items.map(
            item => {
                return (
                    <li className="site__header__nav__item"><a href={"#" + item}>{item}</a></li>
                );
            }
        )
        return (
            <div className="site">
                <div className="container">
                    <header className="site__header">
                        <div className="site__header__logo">
                            <span><h2>MIXD</h2></span>
                            <h4>Mixd WORLD CLASS WEB DESIGN</h4>
                        </div>
                        <nav className="site__header__nav">
                            {navItems}

                        </nav>
                    </header>
                    <main className="site__main">
                        <img src={PicMain} alt="" className="site__main__pic" />
                        <div className="site__main__description">
                            <h2>WE ARE HERE FOR YOU</h2>
                            <p>We are extremely proud to work with and support the NHS throughout the COVID-19 pandemic.</p>
                            <h4>FIND OUT HOW WE'RE HELPING</h4>
                            <div className="line"></div>
                        </div>
                    </main>
                </div>
               </div>
        )
    }
}

export default MyIndex;