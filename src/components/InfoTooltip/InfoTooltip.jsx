import React from 'react';
import styles from './InfoTooltip.module.scss';
import SuccessMark from '../../../public/images/success-mark.svg';
import FailMark from '../../../public/images/failed-mark.svg';
import Image from 'next/image';

function InfoTooltip(props) {
  const image = props.isSuccess ? SuccessMark : FailMark;
  const text = props.isSuccess
    ? 'Success! I will respond to you soon.'
    : 'Oops, something went wrong! Please try again.';
  const imageAlt = props.isSuccess ? 'Success' : 'Fail';
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    if (props.isOpen) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [props.isOpen]);

  React.useEffect(() => {
    function handleClickOutside(event) {
      const modalContainer = document.querySelector(`.${styles.modal__container}`);
      if (!modalContainer.contains(event.target)) {
        props.onClose();
      }
    }
    window.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
    };
  });

  return (
    <div
      className={`${styles.modal} ${styles.modal_tooltip} ${isVisible ? styles.modal_active : ''}`}
    >
      <div className={styles.modal__container}>
        <Image className={styles.modal__tooltip_image} src={image} alt={imageAlt} />
        <h3 className={`${styles.modal__title} ${styles.modal__tooltip_text}`}>{text}</h3>
        <button
          className={`${styles.modal__close_button} ${styles.modal__close_tooltip}`}
          onClick={props.onClose}
        />
      </div>
    </div>
  );
}

export default InfoTooltip;
