import React from 'react';
import styles from './Card.module.css';

export const Card = () => {
  return (
    <div className={styles.card}>
      <img
        src="data:image/jpeg;base64,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"
        alt="med pic"
        className={styles.img}
      />
      <p className={styles.name}>Favipiravir 400mg (Fabiflu) Tablets</p>
      <h4 className={styles.price}>
        Rs 1,775<span> / stripe</span>
      </h4>
      <h4 className={styles.manufacturer}>Glenmark Pharmaceutical Limited</h4>
      <p className={styles.address}>PARVAT PATIYA,SURAT,GUJRAT</p>
      <div className={styles.footer}>
        <i className="fa fa-telegram" style={{ color: '#31b7ac' }}></i>
        <h4>Contact Supplier</h4>
      </div>
    </div>
  );
};

export default Card;