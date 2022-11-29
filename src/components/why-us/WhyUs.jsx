import "./why-us.css"
import React from 'react'
import WhyUsImage from "../../assets/images/why-us-image.png"

const WhyUs = () => {
    return (
        <section className="section why-us">
            <div className="section-center why-us-center">
                <img src={WhyUsImage} alt="a man looking at a computer" loading="lazy"  />
                <article className="right">
                    <p className="section-title">
                    WHY US?
                    </p>
                    <h2 className="title">
                    Transparent, flexible,
                    <br />                     experienced and result oriented
                    </h2>
                    <p>
                    We ensure regular communication; we established a daily reporting system, and tracking tools according to the client’s preferences.
                    </p>
                    <p>We provide rapid team ramp-up and easily scale it up and down depending on the changing conditions of the project.

                    </p>
                    <p>Data tech Analytics Empire has maintained well-managed processes to deliver data analysis and software development services.</p>
                    <p>
                        The success of our clients in all of their projects with us is the goal we have set for ourselves. And to always achieve this, we are ever determined to carry out our work as quickly and efficiently as possible.
                    </p>

                </article>

            </div>
        </section>
    )
}

export default WhyUs
