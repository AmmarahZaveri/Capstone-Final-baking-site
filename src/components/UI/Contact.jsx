import React, { useRef } from 'react';
import '../../styles/contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { BsLinkedin } from 'react-icons/bs';
import { FaInstagramSquare } from 'react-icons/fa';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    // Display an alert message
    alert("Your message has been sent!");
    // Reset the form fields
    form.current.reset();
  };

  return (
    <section id='contact'>
      <h2>Contact Us</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className='contact_option-icon' />
            <h4>Email</h4>
            <h5>ZAVERIculinaryschool@gmail.com</h5>
            <a>Send a message</a>

          </article>
          <article className="contact_option">
            <BsLinkedin className='contact_option-icon' />
            <h4>Linkedin</h4>
            <h5>ZAVERI</h5>
            <a> Follow us</a>

          </article>
          <article className="contact_option">
            <FaInstagramSquare className='contact_option-icon' />
            <h4>Instagram</h4>
            <h5>ZAVERI</h5>
            <a>Follow us</a>

          </article>
        </div>
        {/*END OF CONTACT OPTIONS*/}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
};

export default Contact;