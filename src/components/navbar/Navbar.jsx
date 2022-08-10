import "./navbar.css"
import React, {useState} from 'react'
import {NavLink} from "react-router-dom"
import logo from "../../assets/images/data-tech-logo.svg"
import useScrollPosition from "../../hooks/useScrollPosition"
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
function Navbar() {
    const position = useScrollPosition()
    const [toggleMenu, setToggleMenu]= useState(false)

    const handelToggleMenu = ()=> {
        setToggleMenu(!toggleMenu)
    }


  return (
      <header>
            <nav className={ `navbar ${position > 0 ? "navbar-fixed" : ""}`}>
                <div className="nav-center">
                <div className="nav-header">
                    <div className="mobile">
                <img src={logo} alt="website logo" className="nav-logo" />
                <MenuOutlinedIcon  fontSize="inherit" className="nav-icon" onClick= {handelToggleMenu} />
                </div>
                <ul className={`nav-links ${toggleMenu ? "show-links": ""}`}>
                <li className="nav-link">
                    <NavLink to="/">
                        Home
                    </NavLink>
                </li>
                <li className="nav-link">
                    <NavLink to="/services">
                        Services
                    </NavLink>
                </li>
                <li className="nav-link">
                    <NavLink to="/about">
                        about
                    </NavLink>
                </li>
                <li className="nav-link">
                    <NavLink to="/contact">
                        contact
                    </NavLink>
                </li>
            </ul>
                </div>
            </div>
    </nav>
            </header>
  )
}

export default Navbar