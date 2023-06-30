import emailjs from '@emailjs/browser';
import React, { useRef, useState } from 'react';
import styles from './Contact.module.scss';
import InfoTooltip from '../InfoTooltip/InfoTooltip';

function Contact() {
  const refForm = useRef(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const honeypot = e.target.querySelector("input[name='email-confirm']");
    if (honeypot.value) {
      return false;
    }

    emailjs
      .sendForm('service_dqm28n8', 'template_2xn3nhq', refForm.current, 'iDsCGoKJNkMjEoYgL')
      .then(
        () => {
          setIsSuccess(true);
          openModal();
          refForm.current.reset();
        },
        () => {
          setIsSuccess(false);
          openModal();
        },
      );
  };

  return (
    <section className={styles.contact}>
      <div className={styles.contact__container}>
        <div className={styles.contact__title}>
          <h2 className='title'>contact</h2>
          <div className={styles.contact__line} />
        </div>
      </div>
      <p className={styles.contact__paragraph}>
        I am interested in new opportunities and challenges. If you have any questions or want to
        work with me, please contact me.
      </p>
      <div className={styles.contact_form}>
        <form ref={refForm} onSubmit={handleSubmit}>
          <ul>
            <li className={styles.half}>
              <input type='text' name='name' placeholder='Name' required />
            </li>
            <li className={styles.half}>
              <input type='email' name='email' placeholder='Email' required />
            </li>
            <li>
              <input type='text' name='subject' placeholder='Subject' required />
            </li>
            <li>
              <textarea name='message' placeholder='Message' required />
            </li>
            <li className={styles.hidden}>
              <input type='text' placeholder='Email Confirm' name='email-confirm' tabIndex='-1' />
            </li>
          </ul>
          <br />
          <div>
            <input type='submit' className={styles.contact__button} value='Send' />
          </div>
        </form>
      </div>
      <InfoTooltip onClose={closeModal} isOpen={isOpen} isSuccess={isSuccess} />
    </section>
  );
}

export default Contact;
