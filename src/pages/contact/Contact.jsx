import React, { useEffect } from 'react'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import "./contact.css"

const Contact = () => {
  useEffect(() => {
    document.title= "Data-Tech-Analysis-Empire || Contact"

}, [])
  return (
    <main>
        <Navbar/>
        <section className='section contact-page'>
        <h1>
          Contact
        </h1>
        <p className='section-center'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione, nisi commodi quam impedit quae voluptas alias perspiciatis ut optio odit enim? Explicabo repellat non corrupti unde facere libero saepe, dolorem laborum rem ut nemo dolor quam nam numquam velit inventore quisquam recusandae aspernatur! Omnis, quisquam excepturi eius voluptatibus sit necessitatibus? 
          </p>
        </section>
        <Footer/>
    </main>
  )
}

export default Contact