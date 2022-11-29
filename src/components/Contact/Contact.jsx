import React, { useRef } from 'react'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';



import("./Contact.css");


const Contact = () => {


  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_cep1stp', 'template_3js2yuu', form.current, 'hRumW46UfwWKjwG4u')
      .then(function (response) {
        console.log('SUCCESS!', response.status, response.text);
        alert("Thankyou ! Your message has been send successfully")
      }, function (error) {
        console.log('FAILED...', error);
        alert("Failed ")
      });
    e.target.reset()
  }





  return (
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
    >
      <section id="contact">
        <h5>Get in touch</h5>
        <h2>Contact Me</h2>

        <div className="container contact__container">
          <div className="contact__options">
            <article className='contact__option'>
              <MdOutlineEmail className='contact__option-icon' />
              <h4>Email</h4>
              <h5>ahadkhan40451@gmail.com</h5>
              <a href="mailto:ahadkhan40451@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
            </article>
            <article className='contact__option'>
              <RiMessengerLine className='contact__option-icon' />
              <h4>Messenger</h4>
              <h5>Abdul Ahad</h5>
              <a href="https://www.messenger.com/t/100022152171495" target="_blank" rel="noreferrer">Send a message</a>
            </article>
            <article className='contact__option'>
              <BsWhatsapp className='contact__option-icon' />
              <h4>WhatsApp</h4>
              <h5>03168990880</h5>
              <a href="https://api.whatsapp.com/send?phone=03168990880" target="_blank" rel="noreferrer">Send a message</a>
            </article>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Your Full Name' required />
            <input type="email" name='email' placeholder='Your Email' required />
            <textarea name="message" id="" rows="7" placeholder='Your message' required></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
          </form>
        </div>

      </section>
    </motion.div>
  )
}

export default Contact