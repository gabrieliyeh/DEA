import { useEffect, useState } from 'react'
import useScrollPosition from '../../hooks/useScrollPosition'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import "./contact.css"

const Contact = () => {
  const position = useScrollPosition();
  const [file,setFile]= useState('')

  const handleFileUpload = (e)=> {
    console.log('i was called', 'file object')
    setFile(e.target.files[0])
    console.log(file, 'file object')
  }

  useEffect(() => {
    document.title= "Data-Tech-Analysis-Empire || Contact"

}, [])

  return (
    <main  className={ `contact-page ${position > 0 ? "margin-top" : ""}`}>
  
        <Navbar/>
        <section className='section contact-page'>
          <div className='section-center contact-center'>
          <article>
        <p className='section-title '>
          Contact
        </p>
        <h2>
        Get in touch with us for more information
        </h2>
        <p> We would love to hear from you.
        Send us any suggestions or questions and we will write you back the same day.
          </p>
          <p>
            <span className='tag'>
            Email:
            </span>
            datatechanalysis@gmail.com
          </p>
          <p>
            <span className='tag'>
            Address: 
            </span>
            datatechanalysis@gmail.com
          </p>
          </article>
          <form >
              <div className='form-control'>
                <label htmlFor="fullName">Full name</label>
                <input type="text" placeholder='Enter full name' />
              </div>
              <div className='form-control'>
                <label htmlFor="email">Email</label>
                <input type="email" placeholder='Enter email address' />
              </div>
              <div className='form-control'>
                <label htmlFor="message">Message</label>
                <textarea name="" id="" cols="30" rows="10" placeholder='Enter message'>

                </textarea>
              </div>
              <div className='form-file-control'>
                <label htmlFor="file">Drag & drop your files here or <span>
                choose file
                  </span> </label>
                <input type="file" id='file' className='file' onChange={handleFileUpload} />
              </div>
              <div className='file-name'>
              {file?.name}
              </div>
              <div className='form-check-control'>
                <input type="checkbox" />
                <p>
                I have read and accepted the  
                  <span >
                 Terms &
              
                 Condition 
                  </span>
                  and 
                  <span>
                  Privacy Policy  
                  </span>
                </p>
              </div>
             
              <button className="btn">
              SEND MESSAGE
              </button>
          </form>
          </div>
        </section>
        <Footer/>
    </main>
  )
}

export default Contact