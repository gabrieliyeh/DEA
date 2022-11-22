import "./sidebar.css"
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/dea-logo.png";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const SideBar = ({toggleSideBar, setToggleSideBar}) => {

  return (
    <aside className={`sidebar ${toggleSideBar === true ? "show-sidebar": ''}`}>   
       
        <div className="top ">
         <img src={logo} alt="business logo" className="nav-logo" />
        <CloseOutlinedIcon className="icon" onClick={()=> setToggleSideBar(false)} />
        </div>
         <div className="bottom">
        <nav className="sidebar-center">
        <ul className='sidebar-links'>
              <li className="sidebar-link">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="sidebar-link">
                <NavLink to="/services">Services</NavLink>
              </li>
              <li className="sidebar-link">
                <NavLink to="/about">about</NavLink>
              </li>
              <li className="sidebar-link">
                <NavLink to="/contact">contact</NavLink>
              </li>
            </ul>
        </nav>
        </div>
    </aside>
  )
}

export default SideBar