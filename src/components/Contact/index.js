import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import emailjs from '@emailjs/browser';
import React from 'react';
import ContactAvatar from '../../assets/images/contact.png';

const Contact = () => {
  const [letterClass, setLetterClass] = React.useState('text-animate');
  const refForm = React.useRef();

  React.useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_dqm28n8',
        'template_2xn3nhq',
        refForm.current,
        'iDsCGoKJNkMjEoYgL'
      )
      .then(
        () => {
          alert('Message sent, I will contact you shortly');
          window.location.reload(false);
        },
        () => {
          alert('An error occured, please try again');
        }
      );
  };

  return (
    <>
      <section className="section contact-page" id="contact">
        <div className="contact">
          <h1 className="contact__title">
            <span className="underline">
              <AnimatedLetters
                letterClass={letterClass}
                strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                idx={15}
              />
            </span>
          </h1>
          <img
            className="contact__avatar"
            src={ContactAvatar}
            alt="contact avatar"
          />
          <p className="contact__paragraph">
            I am interested in new opportunities and challenges. If you have any
            questions or want to work with me, please contact me.
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  ></input>
                </li>
                <li>
                  <textarea
                    name="message"
                    placeholder="Message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
