import "./testimonial.css"
import review from "../../assets/images/Review.svg"

const Testimonials = () => {
    return (
        <div className="section testimonial">
            <div className="section-center">
            <div className="top">
                <p className="section-title">TESTIMONIALS</p>
           <h2>
           What our trusted
           <br />
            clients say 
           </h2>
           <p>
           Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
           </p>
           </div>
            <div className="bottom">
           <div className="bg-color">
               
           </div>
           <div className="testimonial-info">
           <article className="card-1">
                    <img src={review} alt="" />
                    <p>
                    “DAE is very reliable and efficient, they helped me make sense of my data for my project.”
                    </p>
                    <span className="name">
                Tunde Barnes 
                </span>
                <p>
                Final Year Student, Unilag
                </p>
                </article>
                <article className="card-2">
                <img src={review} alt="star" />
                <p>“I could not be more thrilled that I ended up deciding on DAE to help i developing a website for my online presence.”</p>
                <span className="name">
                John Marko
                </span>
                <p>
                Founder at BetaTech
                </p>
                </article>
                <article className="card-3">
                <img src={review} alt="" />
                <p>
                “DAE is very reliable and efficient, they helped me make sense of my data for my project.”
                </p>
                <span className="name">
                Chris Evans 
                </span>
                <p>
                Business Man
                </p>
                </article>
           </div>
            </div>
            </div>

        </div>
    )
}

export default Testimonials
