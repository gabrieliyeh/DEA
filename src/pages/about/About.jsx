import "./about.css"
import React, { useEffect } from 'react'
import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"
import about_sub from "../../assets/images/about-sub.svg"

const About = () => {
    useEffect(() => {
        document.title= "Data-Tech-Analysis-Empire || About"
  
    }, [])
    return (
        <main>
            <Navbar/>
            <section className="section about-main">
                <div className="section-center">
                    <h1>
                    About Us
                    </h1>
                </div>
            </section>
            <section className="section">
                <h2 className=" section-title section-center" >
                About Us
                </h2>
                <div className="section-center about-main-center">
                    <article className="about-main-info">
                        <p>
                        Datatech analysis empire  is a data driven company comprising of a team of professional data analyst, seasoned and qualified with skills to collect, Process, Analyse and Interpret Data.
                        </p>
                        <p>
                        Our professionals have years of experience in statistical modelling and business intelligence and we use both commercial and open source software packages in conjunction with datadriven analysis to help organizations profile, segment, report & visualize their data assets
                        </p>
                    </article>
                    <article className="about-main-info-2">
                        <img src={about_sub} alt="about-second" className="to"/>
                    </article>
                </div>
            </section>
            <section className="section bg-grey">
                <div className="section-center about-sub-center">
                <article className="card">
                    <h3>
                    Our Vision
                    </h3>
                    <p>Our Vision is to be the best advance data analytics, data driven, web design, web development and software development company  </p>
                </article>
                <article className="card">
                    <h3>
                    Our Mission
                    </h3>
                    <p>
                    To be the top notch data analytics and software development company
                    </p>
                </article>
                <article className="card">
                    <h3>
                    Our Values
                    </h3>
                    <p> 
                    Our core values are Customer satisfaction, Quality deliverable, Team work, Honesty and Intergrity
                    </p>
                </article>
                </div>
            </section>
            <div className="div">

            </div>
            <Footer/>
            
        </main>
    )
}

export default About
