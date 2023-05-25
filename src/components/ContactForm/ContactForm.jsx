import React, { useState } from 'react';
import css from '../../components/ContactForm/ContactForm.module.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    // Обработка отправки формы, например, отправка данных на сервер

    // Очистка полей формы после отправки
    setName('');
    setEmail('');
    setPhone('');
    setAddress('');
  };

  return (
    <form onSubmit={handleSubmit} className={css.contactBlock}>
      <div>
        <label htmlFor="name" className={css.contactLabel}>
          Name:
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={e => setName(e.target.value)}
          className={css.contactInput}
        />
      </div>
      <div>
        <label htmlFor="email" className={css.contactLabel}>
          Email:
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className={css.contactInput}
        />
      </div>
      <div>
        <label htmlFor="phone" className={css.contactLabel}>
          Phone:
        </label>
        <input
          type="tel"
          id="phone"
          value={phone}
          onChange={e => setPhone(e.target.value)}
          className={css.contactInput}
        />
      </div>
      <div>
        <label htmlFor="address" className={css.contactLabel}>
          Address:
        </label>
        <input
          type="text"
          id="address"
          value={address}
          onChange={e => setAddress(e.target.value)}
          className={css.contactInput}
        />
      </div>
      <button type="submit" className={css.contactBtn}>
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
