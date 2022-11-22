import "./faq.css";
import { useState } from "react";
import FAQImage from "../../assets/images/faq-img.svg"
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";

const FAQ = () => {
  const [showContent, setShowContent] = useState(false);
  const [showContent2, setShowContent2] = useState(false);
  const [showContent3, setShowContent3] = useState(false);
  const [showContent4, setShowContent4] = useState(false);

  
  const handleClick = () => {
    setShowContent(!showContent)


  };

  const handleClick2=()=> {
    setShowContent2(!showContent2);
  }
  const handleClick3=()=> {
    setShowContent3(!showContent3);
  }
  const handleClick4=()=> {
    setShowContent4(!showContent4);
  }
  

  return (
    <section className="faq section">
      <h1>Frequently asked questions</h1>
      <div className="section-center faq-center">
        <div className="left">
          <div className="question">
            <div className="wrapper">
              <h2 onClick={handleClick}>Is DAE a training institute ?</h2>
              {showContent ? (
                <RemoveOutlinedIcon onClick={handleClick}  className='icon' />
              ) : (
                <AddOutlinedIcon onClick={handleClick} className='icon' />
              )}
            </div>
            {
                showContent && (
                    <p>
                    No, you do not need to create an account, you can analyze any data
                    of your choice in three easy steps. No, you do not need to create
                    an account, you can analyze any data of your choice in three easy
                    steps.
                  </p>
                )
            }
          </div>
          <div className="question">
            <div className="wrapper">
              <h2 onClick={handleClick2}>Do I need to create an account?</h2>
              {showContent2  ? (
                <RemoveOutlinedIcon onClick={handleClick2}  className='icon'/>
              ) : (
                <AddOutlinedIcon onClick={handleClick2}  className='icon'/>
              )}
            </div>
            {
                showContent2 && (
                    <p>
                    No, you do not need to create an account, you can analyze any data
                    of your choice in three easy steps. No, you do not need to create
                    an account, you can analyze any data of your choice in three easy
                    steps.
                  </p>
                )
            }
          </div>
          <div className="question">
            <div className="wrapper">
              <h2 onClick={handleClick3}>Is DAE free to use?</h2>
              {showContent3 ? (
                <RemoveOutlinedIcon onClick={handleClick3} className='icon' />
              ) : (
                <AddOutlinedIcon onClick={handleClick3}  className='icon'/>
              )}
            </div>
            {
                showContent3 && (
                    <p>
                    No, you do not need to create an account, you can analyze any data
                    of your choice in three easy steps. No, you do not need to create
                    an account, you can analyze any data of your choice in three easy
                    steps.
                  </p>
                )
            }
          </div>
          <div className="question">
            <div className="wrapper">
              <h2 onClick={handleClick4}>What are the Benefits of using DAE?</h2>
              {showContent4? (
                <RemoveOutlinedIcon onClick={handleClick4}  className='icon'/>
              ) : (
                <AddOutlinedIcon onClick={handleClick4}  className='icon'/>
              )}
            </div>
            {
                showContent4  && (
                    <p>
                    No, you do not need to create an account, you can analyze any data
                    of your choice in three easy steps. No, you do not need to create
                    an account, you can analyze any data of your choice in three easy
                    steps.
                  </p>
                )
            }
          </div>
        </div>
        <img src={FAQImage} loading='lazy' alt="two women reading a diagram on a table" />
      </div>
    </section>
  );
};

export default FAQ;
