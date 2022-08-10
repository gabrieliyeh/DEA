import "./hero.css";
import React from "react";
import {Link} from "react-router-dom"

const Hero = () => {
  return (
    <section className="hero section">
      <div className="section-center">
        <article className="hero-info">
        <h2>
          <span className="heading">Want to analyze Data?</span>
          <br />
          <span className="sub-heading">
          Let’s do it for you!
          </span>
        </h2>
        <p>
          Get data analysis professional on deck to completely analyse,
          interpret your data, let’s get it done in 3 steps
        </p>
         <ul>
            <li>Upload
          data/deliverables.</li>
            <li> Pay for service </li>
            <li> Get result</li>
          </ul>
        <Link className="btn" to="/services">
          Get started
        </Link>
        </article>
       
      
      </div>
    </section>
  );
};

export default Hero;
