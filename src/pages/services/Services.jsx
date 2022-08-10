import React, { useEffect } from 'react'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import "./services.css"

const Services = () => {
  useEffect(() => {
    document.title= "Data-Tech-Analysis-Empire || Services"

}, [])
  return (
    <main>
        <Navbar/>
        <section className='section'>
          <p className='section-center'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione, nisi commodi quam impedit quae voluptas alias perspiciatis ut optio odit enim? Explicabo repellat non corrupti unde facere libero saepe, dolorem laborum rem ut nemo dolor quam nam numquam velit inventore quisquam recusandae aspernatur! Omnis, quisquam excepturi eius voluptatibus sit necessitatibus? 
          </p>
        </section>
       <Footer/>
    </main>
  )
}

export default Services