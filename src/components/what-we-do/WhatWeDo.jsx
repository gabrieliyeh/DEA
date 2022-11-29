import "./what-we-do.css"
import {Link} from "react-router-dom"
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
                
                    <p>DAE simply never assumes when it comes to data. Rather with large sets of data, we look for patterns and summarize the data set’s main characteristics beyond modeling and hypothesis testing.</p>
                    <p>DAE will help you show or summarize data points in a constructive way such that patterns might emerge that fulfill every condition of the data. We guide you all along the way in conducting statistical data analysis.</p>

                   <Link to='/services'> <button className="btn">See More</button> </Link>
                </div>

                <div className=" right">
                    <div className="details">
                        <div className="heading">
                        <img src={Icon1} alt="icon" />
                        <span className="title">Exploratory Data Analysis</span>
                        </div>
                        <p>
                        EDA is a philosophy that allows data analysts to approach a database without assumptions
                        </p>
                    </div>
                    <div className="details">
                        <div className="heading">
                        <img src={Icon2} alt="icon" />
                       
                       <span className="title">Business Analysis</span>
                        </div>
                   
                        <p>
                        To keep good track of performance and trends of business, DAE helps you make a great and informative comparison of the business’s current position to the competition so that your organization can strategically improve its performance.
                        </p>
                    </div>
                    <div className="details">
                        <div className="heading">
                        <img src={Icon3} alt="icon" />
                        <span className="title">Inferential Analysis</span>
                        </div>
                    
                        <p>
                        DAE seeks out the information beyond all that the data presents, and rather draws out qualitative information from the available data. We aim at concludes that extend beyond the immediate data alone.
                        </p>
                    </div>
                    <div className="details">
                        <div className="heading">
                        <img src={Icon4} alt="icon" />
                        <span className="title">Predictive Analysis</span>
                        </div>
                    
                        <p>
                         In this process, we use data along with analysis, statistics, and machine learning techniques to create a predictive model for forecasting future events.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhatWeDo
