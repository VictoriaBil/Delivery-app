import phone from 'images/phone.jpg';
import css from '../pages/Home.module.css';

export default function Home() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Join PhoneBook today</h1>
      <img src={phone} alt="phone" className={css.img} />
    </div>
  );
}
