import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import css from '../RegisterPage/RegisterPage.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off" className={css.form}>
      <label className={css.label}>
        Username
        <input type="text" required name="name" className={css.item} />
      </label>
      <label className={css.label}>
        Email
        <input type="email" required name="email" className={css.item} />
      </label>
      <label className={css.label}>
        Password
        <input
          type="password"
          required
          placeholder="Including letters and numbers"
          name="password"
          className={css.item}
        />
      </label>
      <button type="submit" className={css.BtnRegister}>
        Register
      </button>
    </form>
  );
};
