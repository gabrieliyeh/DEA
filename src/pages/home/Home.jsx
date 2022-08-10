import "./home.css"
import React, { useEffect } from 'react'
import Navbar from "../../components/navbar/Navbar"
import Hero from "../../components/hero/Hero"
import About from "../../components/about/About"
import Services from "../../components/services/Services"
import ContactUs from "../../components/contact-us/ContactUs"
import Footer from "../../components/footer/Footer"

const Home = () => {
    useEffect(() => {
        document.title= "Data-Tech-Analysis-Empire || Home"
  
    }, [])
    
    return (
        <main>
            <Navbar/>
            <Hero/>
            <About/>
            <Services/>
            <ContactUs/>
            <Footer/>

        </main>
    )
}

export default Home
