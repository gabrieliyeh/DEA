import { useEffect, useState } from 'react'
import useScrollPosition from '../../hooks/useScrollPosition'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import "./contact.css"
import { toast } from 'react-toastify'

const Contact = () => {
  const position = useScrollPosition();
  const [file,setFile]= useState('')
  const [loading,setLoading]= useState(false)
  const [contactInfo, setContactInfo]= useState({
    fullName: '',
    email: '',
    message: ''
  })

  const handleChange = e => {
    const {name, value}= e.target
    setContactInfo(prevState=> ({
      ...prevState,
      [name]: value
    }))
  }

  const handleFileUpload = (e)=> {
    setFile(e.target.files[0])
  }
  const handleSubmit = e => {
    setLoading(true)
    e.preventDefault()
    setTimeout(()=> {
      toast.success('Message sent successfully')
      setContactInfo({
        ...contactInfo,
        fullName: '',
        email: '',
        message: ''
      })
      setLoading(false)
    }, 1000)
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
            Plot 19 Oba Amusa Adebambo Ave Agungi Lekki Lagos State
          </p>
          </article>
          <form onSubmit={handleSubmit}>
              <div className='form-control'>
                <label htmlFor="fullName">Full name</label>
                <input name='fullName' value={contactInfo.fullName} type="text"  onChange={handleChange} placeholder='Enter full name' required />
              </div>
              <div className='form-control'>
                <label htmlFor="email">Email</label>
                <input name='email' type="email" value={contactInfo.email} onChange={handleChange} placeholder='Enter email address' required />
              </div>
              <div className='form-control'>
                <label htmlFor="message">Message</label>
                <textarea name="message" onChange={handleChange} value={contactInfo.message} cols="30" rows="10" placeholder='Enter message' required>

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
                <input type="checkbox" required />
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
             
              <button disabled={loading} className="btn">
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