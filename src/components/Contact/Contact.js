import './Contact.scss';
import emailjs from '@emailjs/browser';
import React from 'react';

function Contact() {
  const refForm = React.useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_dqm28n8', 'template_2xn3nhq', refForm.current, 'iDsCGoKJNkMjEoYgL')
      .then(
        () => {
          alert('Message sent, I will contact you shortly');
          window.location.reload(false);
          refForm.current.reset();
        },
        () => {
          alert('An error occured, please try again');
        },
      );
  };

  return (
    <section className='section contact-page' id='contact'>
      <div className='contact'>
        <h1 className='contact__title'>Contact me</h1>
        <p className='contact__paragraph'>
          I am interested in new opportunities and challenges. If you have any questions or want to
          work with me, please contact me.
        </p>
        <div className='contact-form'>
          <form ref={refForm} onSubmit={sendEmail}>
            <ul>
              <li className='half'>
                <input type='text' name='name' placeholder='Name' required />
              </li>
              <li className='half'>
                <input type='email' name='email' placeholder='Email' required />
              </li>
              <li>
                <input type='text' name='subject' placeholder='Subject' required />
              </li>
              <li>
                <textarea name='message' placeholder='Message' required />
              </li>
              <li>
                <input type='submit' className='contact__button' value='Send' />
              </li>
            </ul>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
