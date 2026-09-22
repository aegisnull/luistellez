import React from 'react';
import useInView from '../../hooks/useInView';
import styles from './Reveal.module.scss';

function Reveal({
  children,
  className = '',
  as: Component = 'div',
  delay = 0,
  variant = 'up',
  threshold = 0.12,
}) {
  const { ref, isInView } = useInView({ threshold });
  const variantClass = styles[`reveal_${variant}`] || styles.reveal_up;

  return (
    <Component
      ref={ref}
      className={[styles.reveal, variantClass, isInView ? styles.reveal_visible : '', className]
        .filter(Boolean)
        .join(' ')}
      style={{ '--reveal-delay': `${delay}ms` }}
    >
      {children}
    </Component>
  );
}

export default Reveal;
