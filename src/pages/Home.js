import React from 'react';
import delivery from 'images/delivery.png';
import css from '../pages/Home.module.css';

export default function Home() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Sign in and order delivery</h1>
      <img src={delivery} alt="delivery" className={css.img} />
    </div>
  );
}
