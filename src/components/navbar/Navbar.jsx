import "./navbar.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/dea-logo.png";
import useScrollPosition from "../../hooks/useScrollPosition";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import SideBar from "../side-bar/SideBar";
function Navbar() {
  const position = useScrollPosition();
  const [toggleSideBar, setToggleSideBar] = useState(false);

  const handelToggleSidebar = () => {
    setToggleSideBar(!toggleSideBar)
  };

  return (
    <>
    <SideBar toggleSideBar={toggleSideBar} setToggleSideBar={setToggleSideBar} />
    <nav className={`navbar ${position > 0 ? "navbar-fixed" : ""}`}>
      <header>
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} alt="business logo" className="nav-logo" />
            <ul className='nav-links'>
              <li className="nav-link">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="nav-link">
                <NavLink to="/services">Services</NavLink>
              </li>
              <li className="nav-link">
                <NavLink to="/about">about</NavLink>
              </li>
              <li className="nav-link">
                <NavLink to="/contact">contact</NavLink>
              </li>
            </ul>
            <button className="btn">get started</button>
            <MenuOutlinedIcon
              fontSize="inherit"
              className="nav-icon"
              onClick={handelToggleSidebar}
            />
          </div>
        </div>
      </header>
    </nav>
    </>
  );
}

export default Navbar;
