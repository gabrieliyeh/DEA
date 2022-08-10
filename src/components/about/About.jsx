import "./about.css"
import React from 'react'

const About = () => {
    return (
        <section className="section">
            <div className="section-title">
                <h2>Why Us?</h2>
            </div>
            <div className="section-center about-center">
            <article className="about-info">
                <h3>
                Result oriented
                </h3>
                <p>
                The only indicator of project’s success is the achievement and goal’s set by our client.we carry out our work as quickly and efficiently as possible.
                </p>
            </article>
            <article className="about-info">
                <h3>
                Transparent
                </h3>
                <p>
                We ensure regular communication, an established daily reporting system, and tracking tools according to the client’s preferences
                </p>
            </article>
            <article className="about-info">
                <h3>
                Flexible
                </h3>
                <p>
                We provide rapid team ramp-up and easily scale it up and down depending on the changing conditions of the project
                </p>
            </article>
            <article className="about-info">
                <h3>
                Experienced
                </h3>
                <p>
                Datatech analytics empire has established well-managed processes to deliver data analysis and  software development services. 
                </p>
            </article>
            </div>
        </section>
    )
}

export default About
