import "./what-we-do.css"
import Icon1 from "../../assets/images/details1-icon.svg"
import Icon2 from "../../assets/images/details2-icon.png"
import Icon3 from "../../assets/images/details3-icon.svg"
import Icon4 from "../../assets/images/details4-icon.svg"

const WhatWeDo = () => {
    return (
        <section className="what-we-do section">
            <div className="section-center what-we-do-center">
                <div className="left">
                    <p className="section-title">
                    WHAT WE DO
                    </p>
                    <h2 className="title">We are here to help you understand your data</h2>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>

                    <button className="btn">See More</button>
                </div>

                <div className=" right">
                    <div className="details">
                        <img src={Icon1} alt="icon" />
                        <span className="title">Explorative Analysis</span>
                        <p>
                        This is the method that will be used to draw data conclusion, it takes data from  a sample then makes conclusion about a group
                        </p>
                    </div>
                    <div className="details">
                    <img src={Icon2} alt="icon" />
                       
                        <span className="title">Business Analysis</span>
                        <p>
                        This is the method that will be used to draw data conclusion, it takes data from  a sample then makes conclusion about a group
                        </p>
                    </div>
                    <div className="details">
                    <img src={Icon3} alt="icon" />
                        <span className="title">Inferential Analysis</span>
                        <p>
                        This is the method that will be used to draw data conclusion, it takes data from  a sample then makes conclusion about a group
                        </p>
                    </div>
                    <div className="details">
                    <img src={Icon4} alt="icon" />
                        <span className="title">Predictive Analysis</span>
                        <p>
                        This is the method that will be used to draw data conclusion, it takes data from  a sample then makes conclusion about a group
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhatWeDo
