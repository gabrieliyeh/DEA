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
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                    </p>
                </article>

            </div>
        </section>
    )
}

export default WhyUs
