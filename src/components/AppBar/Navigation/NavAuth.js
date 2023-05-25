import { Link } from 'react-router-dom';
import css from '../Navigation/NavAuth.module.css';

export const NavAuth = () => {
  return (
    <div className={css.block}>
      <Link to="/register" className={css.navLink}>
        Register
      </Link>
      <Link to="/login" className={css.navLink}>
        Log In
      </Link>
    </div>
  );
};
