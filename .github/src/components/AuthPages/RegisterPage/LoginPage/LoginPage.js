import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import css from '../RegisterPage.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off" className={css.form}>
      <label className={css.label}>
        Email
        <input type="email" name="email" className={css.item} />
      </label>
      <label className={css.label}>
        Password
        <input type="password" name="password" className={css.item} />
      </label>
      <button type="submit" className={css.BtnRegister}>
        Log In
      </button>
    </form>
  );
};
