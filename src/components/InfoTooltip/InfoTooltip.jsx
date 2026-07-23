import React from 'react';
import SuccessMark from '../../../public/images/success-mark.svg';
import FailMark from '../../../public/images/failed-mark.svg';
import Image from 'next/image';
import styles from './InfoTooltip.module.scss';

function InfoTooltip({ isOpen, isSuccess, onClose }) {
  const image = isSuccess ? SuccessMark : FailMark;
  const text = isSuccess
    ? 'Success! I will respond to you soon.'
    : 'Oops, something went wrong! Please try again.';
  const imageAlt = isSuccess ? 'Success' : 'Fail';
  const containerRef = React.useRef(null);

  React.useEffect(() => {
    if (!isOpen) return undefined;

    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        onClose();
      }
    }

    function handleEscape(event) {
      if (event.key === 'Escape') {
        onClose();
      }
    }

    window.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className={`${styles.modal} ${styles.modal_tooltip} ${styles.modal_active}`}
      role='dialog'
      aria-modal='true'
      aria-label={text}
    >
      <div className={styles.modal__container} ref={containerRef}>
        <Image className={styles.modal__tooltip_image} src={image} alt={imageAlt} />
        <h3 className={`${styles.modal__title} ${styles.modal__tooltip_text}`}>{text}</h3>
        <button
          type='button'
          className={`${styles.modal__close_button} ${styles.modal__close_tooltip}`}
          onClick={onClose}
          aria-label='Close dialog'
        />
      </div>
    </div>
  );
}

export default InfoTooltip;
