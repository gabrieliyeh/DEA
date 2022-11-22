import "./our-values.css"
import ourValuesImage from "../../assets/images/our-values.png"

const OurValues = () => {
  return (
    <section className="our-values section">
        <div className="section-center our-values-center">
            <article className="left">
                <p className="section-title">
                OUR VALUES
                </p>
                <h2>
                Customer satisfaction,
                <br />  Quality deliverable, Team work,
                <br /> Honesty and Intergrity
                </h2>
                <p>Datatech analysis empire  is a data driven company comprising of a team of professional data analyst, seasoned and qualified with skills to collect, Process, Analyse and Interpret Data</p>
            </article>
    
            <img src={ourValuesImage} loading='lazy' alt="a woman pointing a finger upward" />
           
        </div>
    </section>
  )
}

export default OurValues