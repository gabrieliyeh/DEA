import "./services.css"
import React from 'react'

const Services = () => {

    return (
        <div className="services">
        <section className="">
            <div className="section-title">
                <h2> Services</h2>
            </div>
            <div className="section-center services-center">
                <article className="service service-1" >
                 <h3> Data Analysis</h3>
                <p>  Our data science teams collect, analyze and process data helping technology businesses and service providers thrive.</p>
                </article>
                <article className="service service-2">
                <h3> Web development</h3>
                <p> We develop and implement custom web-based solutions tailored to particular business and technological requirements</p>
                </article>
                <article className="service service-3">
                <h3> Mobile development</h3>
                <p> Top-notch iOS & Android mobile apps based on the latest technologies and global trends</p>
                </article>
            </div>
        </section>
        <section className="section section-2-bg">
            <div className="section-center services-2-center">
                <article className="card" >
                <h3> Inferential Analysis</h3>
                <p> This is the method that will be used to draw data conclusion, it takes data from  a sample then makes conclusion about a group</p>
                </article>
                <article className="card" >
                <h3> Predictive Analysis</h3>
                <p> This is the method that will be used to draw data conclusion, it takes data from  a sample then makes conclusion about a group</p>
                </article>
                <article className="card" >
                <h3> Business Analysis</h3>
                <p> This is the method that will be used to draw data conclusion, it takes data from  a sample then makes conclusion about a group</p>
                </article>
                <article className="card" >
                <h3> Explorative Analysis </h3>
                <p> This is the method that will be used to draw data conclusion, it takes data from  a sample then makes conclusion about a group</p>
                </article>
                <article className="card" >
                <h3> Descriptive Analysis</h3>
                <p> This is the method that will be used to draw data conclusion, it takes data from  a sample then makes conclusion about a group</p>
                </article>
            </div>

        </section>
        </div>
    )
}

export default Services
