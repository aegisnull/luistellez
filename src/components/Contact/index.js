import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import emailjs from '@emailjs/browser';
import React from 'react';

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
      <div className="section contact-page">
        <div className="content">
          <div className="text-zone">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                idx={15}
              />
            </h1>
            <p>
              I am interested in new opportunities and challenges. If you have
              any questions or want to work with me, please contact me.
            </p>
            <div className="contact-form">
              <form ref={refForm} onSubmit={sendEmail}>
                <ul>
                  <li className="half">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      required
                    />
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
        </div>
      </div>
    </>
  );
};

export default Contact;
