import styles from "./Contact.module.scss";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import React, { useRef, useState } from "react";
import InfoTooltip from "../InfoTooltip/InfoTooltip";

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

    emailjs
      .sendForm(
        "service_dqm28n8",
        "template_2xn3nhq",
        refForm.current,
        "iDsCGoKJNkMjEoYgL"
      )
      .then(
        () => {
          setIsSuccess(true);
          openModal();
          refForm.current.reset();
        },
        () => {
          setIsSuccess(false);
          openModal();
        }
      );
  };

  return (
    <section className={styles.contact}>
      <div className={styles.contact__container}>
        <div className={styles.contact__title}>
          <h2 className="title">contact</h2>
          <div className={styles.contact__line} />
        </div>
      </div>
      <p className={styles.contact__paragraph}>
        I am interested in new opportunities and challenges. If you have any
        questions or want to work with me, please contact me.
      </p>
      <div className={styles.contact_form}>
        <form ref={refForm} onSubmit={handleSubmit}>
          <ul>
            <li className={styles.half}>
              <input type="text" name="name" placeholder="Name" required />
            </li>
            <li className={styles.half}>
              <input type="email" name="email" placeholder="Email" required />
            </li>
            <li>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
              />
            </li>
            <li>
              <textarea name="message" placeholder="Message" required />
            </li>
            <ReCAPTCHA
              sitekey="6Lf0PWokAAAAABkLDBA_5MkgDQZRiR7HUk6wQBrn"
              onChange={handleSubmit}
            />
            <br />
            <li>
              <input
                type="submit"
                className={styles.contact__button}
                value="Send"
              />
            </li>
          </ul>
        </form>
      </div>
      <InfoTooltip onClose={closeModal} isOpen={isOpen} isSuccess={isSuccess} />
    </section>
  );
}

export default Contact;
