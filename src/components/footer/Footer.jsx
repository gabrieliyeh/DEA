import "./footer.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const date = new Date();

  return (
    <footer className="section footer">
      <div className="section-center ">
        <div className="footer-center">
          <article>
            <div className="col">
              <h3> Service</h3>
              <nav>
                <ul>
                  <li>
                    <NavLink to="/about">Mobile Development</NavLink>
                  </li>
                  <li>
                    <NavLink to="#">Web Development</NavLink>
                  </li>
                  <li>
                    <NavLink to="#">Data Analysis</NavLink>
                  </li>
                  <li>
                    <NavLink to="#">Design</NavLink>
                  </li>
                </ul>
              </nav>
            </div>
          </article>

          <div className="col">
            <h3> Learn</h3>
            <nav>
              <ul>
                <li>
                  <NavLink to="#">Blog</NavLink>
                </li>
                <li>
                  <NavLink to="#">FAQ</NavLink>
                </li>
                <li>
                  <NavLink to="#">System Status</NavLink>
                </li>
                <li>
                  <NavLink to="#">API Reference</NavLink>
                </li>
                <li>
                  <NavLink to="#">Features</NavLink>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col">
            <h3> Company</h3>
            <nav>
              <ul>
                <li>
                  <NavLink to="/about">About us</NavLink>
                </li>
                <li>
                  <NavLink to="#">Careers</NavLink>
                </li>
                <li>
                  <NavLink to="#">Affiliate</NavLink>
                </li>
                <li>
                  <NavLink to="#">Sitemap</NavLink>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col">
            <h3> Contact us</h3>

            <div className="first">
              <p>FHA lugbe Abuja, Nigeria</p>
              <br />
              <p>Datatechanalytics@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="last-col">
          <h2> DAE</h2>
          <p>Copyright &copy; {date.getFullYear()} All right reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
