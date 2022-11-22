import "./hero.css";
import {Link} from "react-router-dom"
import useScrollPosition from "../../hooks/useScrollPosition"
import HeroMainPhoto from "../../assets/images/hero-img-1.svg"
import HeroPolygon from "../../assets/images/hero-polygon.svg"
import HeroInsight from "../../assets/images/hero-insights.png"
import HeroTrends from "../../assets/images/hero-trends.png"
import HeroCircle from "../../assets/images/hero-circle.png"
import HeroSquare from "../../assets/images/hero-square.png"
import HeroIndicator from "../../assets/images/hero-indicator.svg"

const Hero = () => {
  const position = useScrollPosition()
  return (
   
    <section  className={ `hero padding ${position > 0 ? "hero-margin" : ""}`}>
      <div className="section-center hero-main">
        <article className="left">
        <h2 className="heading">
        Analyse, Interpret &
        <br />
Visualize your data
        </h2>
        <p>
        Get data analysis professional on deck to completely analyse, interpret your data, let’s get it done in 3 steps: Upload data/deliverables.
Pay for service
Get result
        </p>
        <Link className="btn" to="/services">
        START FOR FREE
        </Link>
        <div>
        <img src={HeroPolygon} alt="polygon" className="hero-polygon"  height='25' />
        </div>
        </article>
        
          <article className="img-wrapper">
          <img src={HeroMainPhoto} loading='lazy' className="hero-main-img" alt= '' role="img" />
          <img src={HeroSquare} loading='lazy' alt="" role="img" className="hero-square" />
          <img src={HeroInsight} loading='lazy' alt="" role="img" className="hero-insights" />
          <img src={HeroTrends} loading='lazy' alt="" role="img" className="hero-trends" />
          <img src={HeroIndicator} loading='lazy' alt="" role="img" className="hero-indicator" />
          <img src={HeroCircle} loading='lazy' alt="" role="img" className="hero-circle" />
          </article>
      </div>
    </section>
  );
};

export default Hero;
