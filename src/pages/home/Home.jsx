import "./home.css"
import React, { useEffect } from 'react'
import Navbar from "../../components/navbar/Navbar"
import Hero from "../../components/hero/Hero"
import WhyUS from "../../components/why-us/WhyUs"

import LatestUpdate from "../../components/latest-update/LatestUpdate"
import Footer from "../../components/footer/Footer"
import Statistics from "../../components/statistics/Statistics"
import WhatWeDo from "../../components/what-we-do/WhatWeDo"
import Testimonials from "../../components/testimonials/Testimonials"

const Home = () => {
    useEffect(() => {
        document.title= "Data-Tech-Analysis-Empire || Home"
  
    }, [])
    
    return (
        <main>
            <Navbar/>
            <Hero/>
            <Statistics/>
            <WhatWeDo/>
            <WhyUS/>
            <Testimonials/>
            <LatestUpdate/>
            <Footer/>
        </main>
    )
}

export default Home
