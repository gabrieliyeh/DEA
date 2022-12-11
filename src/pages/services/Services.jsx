import{ useEffect } from 'react'
import useScrollPosition from "../../hooks/useScrollPosition"
import Footer from '../../components/footer/Footer'
import LatestUpdate from '../../components/latest-update/LatestUpdate'
import Navbar from '../../components/navbar/Navbar'
import "./services.css"
import FAQ from '../../components/FAQ/FAQ'

const Services = () => {
  const position = useScrollPosition()
  useEffect(() => {
    document.title= "Data-Tech-Analysis-Empire || Services"

}, [])
  return (
    <main className='services '>
        <Navbar/>
        <section className={ `section service-heading ${position > 0 ? "margin-top" : ""}`}>
          <div className='section-center'>
          <h2> 
          Shape your business
          <br />
           decisions with trusted
           <br />
            data analytics
          </h2>
          </div>
        </section>
        <section className='wrapper section'>
  
          <p className='section-title'>SERVICES</p>
          <p className='sub-title'>
          We specialize in interpreting data that 
          <br />
          informs business decisions
          </p>
  
          <div className='service-center section-center'>
          <div className='card'>
            <span className='title'>
            Data Analysis
            </span>
            <p>
            Get your data analyzed by professionals in a timely manner with the analytic tool of your choice.
            </p>
            <button className='btn'>Get Started</button>
          </div>
          <div className='card'>
            <span className='title grey'>
            Web Development
            </span>
            <p>
            Allow our Top notch programmers deliver a seamless and user friendly website.
            </p>
            <button className='btn btn-color-white'>Coming Soon</button>
          </div>
          <div className='card'>
            <span className='title grey'>
            Mobile Development
            </span>
            <p>
            Top notch IOS and Android mobile apps based on the latest technologies and global trends.
            </p>
            <button className='btn btn-color-white'>Coming Soon</button>
          </div>
          </div>
        </section>
        <FAQ/>
        <LatestUpdate/>
       <Footer/>
    </main>
  )
}

export default Services