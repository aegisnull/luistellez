import emailjs from '@emailjs/browser';
import React, { useRef, useState } from 'react';
import styles from './Contact.module.scss';
import InfoTooltip from '../InfoTooltip/InfoTooltip';

const EMAILJS_SERVICE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_dqm28n8';
const EMAILJS_TEMPLATE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_2xn3nhq';
const EMAILJS_PUBLIC_KEY =
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'iDsCGoKJNkMjEoYgL';

function Contact() {
  const refForm = useRef(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const honeypot = e.target.querySelector("input[name='email-confirm']");
    if (honeypot?.value) {
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        refForm.current,
        EMAILJS_PUBLIC_KEY,
      );
      setIsSuccess(true);
      openModal();
      refForm.current.reset();
    } catch (error) {
      setIsSuccess(false);
      openModal();
    } finally {
      setIsSubmitting(false);
    }
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
        <form ref={refForm} onSubmit={handleSubmit} noValidate={false}>
          <ul>
            <li className={styles.half}>
              <label className={styles.visually_hidden} htmlFor='contact-name'>
                Name
              </label>
              <input id='contact-name' type='text' name='name' placeholder='Name' required />
            </li>
            <li className={styles.half}>
              <label className={styles.visually_hidden} htmlFor='contact-email'>
                Email
              </label>
              <input id='contact-email' type='email' name='email' placeholder='Email' required />
            </li>
            <li>
              <label className={styles.visually_hidden} htmlFor='contact-subject'>
                Subject
              </label>
              <input
                id='contact-subject'
                type='text'
                name='subject'
                placeholder='Subject'
                required
              />
            </li>
            <li>
              <label className={styles.visually_hidden} htmlFor='contact-message'>
                Message
              </label>
              <textarea id='contact-message' name='message' placeholder='Message' required />
            </li>
            <li className={styles.hidden} aria-hidden='true'>
              <label htmlFor='email-confirm'>Email Confirm</label>
              <input
                id='email-confirm'
                type='text'
                placeholder='Email Confirm'
                name='email-confirm'
                tabIndex={-1}
                autoComplete='off'
              />
            </li>
          </ul>
          <br />
          <div>
            <input
              type='submit'
              className={styles.contact__button}
              value={isSubmitting ? 'Sending…' : 'Send'}
              disabled={isSubmitting}
            />
          </div>
        </form>
      </div>
      <InfoTooltip onClose={closeModal} isOpen={isOpen} isSuccess={isSuccess} />
    </section>
  );
}

export default Contact;
