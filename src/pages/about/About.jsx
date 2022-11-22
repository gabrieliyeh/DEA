import "./about.css"
import { useEffect } from 'react'
import useScrollPosition from "../../hooks/useScrollPosition"
import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"
import WhyDae from "../../components/why-dae/WhyDae"
import OurValues from "../../components/our-values/OurValues"
import aboutImg from "../../assets/images/about-img.svg"
import LatestUpdate from "../../components/latest-update/LatestUpdate"


const About = () => {
    const position = useScrollPosition()
    useEffect(() => {
        document.title= "Data-Tech-Analysis-Empire || About"
  
    }, [])
    return (
        <main className="about">
            <Navbar/>
            <section className={ `section about-main ${position > 0 ? "margin-top" : ""}`}>
                <div className="section-center">
                    <h2>
                    We’re DataTech
                    <br />
                     Analysis Empire
                    </h2>
                </div>
            </section>
            <section className="section">
                <div className="section-center about-main-center">
                    <img src={aboutImg} alt="a man typing a computer" loading="lazy" />
                    <article className="about-main-info">
                    <p className=" section-title" >
                    ABOUT DAE
                    </p>
                          <p>
                        Datatech analysis empire  is a data driven company comprising of a team of professional data analyst, seasoned and qualified with skills to collect, Process, Analyse and Interpret Data.
                        </p>
                        <p>
                        Our professionals have years of experience in statistical modelling and business intelligence and we use both commercial and open source software packages in conjunction with datadriven analysis to help organizations profile, segment, report & visualize their data assets
                        </p>
                    </article>
                </div>
            </section>
            <WhyDae/>
            <OurValues/>
            <LatestUpdate/>

            <Footer/>
            
        </main>
    )
}

export default About
