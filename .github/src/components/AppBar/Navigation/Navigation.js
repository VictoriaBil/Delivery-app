import { useAuth } from 'hooks/useAuth';
import { Link } from 'react-router-dom';
import css from '../Navigation/Navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <nav className={css.navBlock}>
      {!isLoggedIn && (
        <Link to="/" className={css.navLink}>
          Home
        </Link>
      )}
      {isLoggedIn && (
        <Link to="/contacts" className={css.navLinkContacts}>
          Contacts
        </Link>
      )}
    </nav>
  );
};
