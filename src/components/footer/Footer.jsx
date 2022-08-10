import "./footer.css"
import React from 'react'
import {NavLink} from "react-router-dom"
import arrow from "../../assets/images/arrow.svg"

const Footer = () => {
    const date = new Date()


    return (
        <footer className="section footer">
            <div className="section-center footer-center">
                <article>
                    <h2> DAE</h2>
                    <p> Copyright &copy; {date.getFullYear()}
                    <br />
                    All right reserved
                    </p>
                </article>
                <article className="footer-sub-center">
                    <div className="col">
                        <h3> Company</h3>
                        <nav>
                            <ul>
                                <li>
                                    <NavLink to="/about">
                                    About us
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="#">
                                    Careers
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="#">
                                    Affiliate
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="#">
                                    Escrowed trade
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="#">
                                    Press
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="#">
                                    Mission
                                    </NavLink>
                                </li>
                                
                            </ul>
                        </nav>

                    </div>
                    <div className="col">
                        <h3> Learn</h3>
                        <nav>
                            <ul>
                                <li>
                                    <NavLink to="#">
                                    FAQ
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="#">
                                    System Status
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="#">
                                    API Reference
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="#">
                                    Features
                                    </NavLink>
                                </li>  
                            </ul>
                        </nav>

                    </div> 
                    <div className="col">
                        <h3> Contact us</h3>
                        <p> Datatechanalytics@gmail.com
                            <br />
                            +2347038594884
                        </p>
                        <nav>
                            <ul>
                                <div className="list-container">
                                <li>
                                    <NavLink to="#">
                                    Facebook  
                                    </NavLink>
                                </li>
                                <span className="footer-icon"> <img src={arrow} alt="" /> </span>
                                </div>
                                <div className="list-container">
                                <li>
                                    <NavLink to="#">
                                    LinkedIn   
                                    </NavLink>
                                </li>
                                <span className="footer-icon"> <img src={arrow} alt="" /> </span>
                                </div>
                                <div className="list-container">
                                <li>
                                    <NavLink to="#">
                                    Twitter 
                                    </NavLink>
                                </li>
                                <span className="footer-icon"> <img src={arrow} alt="" /> </span>
                                </div>
                                <div className="list-container">
                                <li>
                                    <NavLink to="#">
                                    Telegram 
                                    </NavLink>
                                </li>
                                <span className="footer-icon"> <img src={arrow} alt="" /> </span>
                                </div>
                            </ul>
                        </nav>
                    

                    </div>
                </article>
            </div>
        </footer>
    )
}

export default Footer
