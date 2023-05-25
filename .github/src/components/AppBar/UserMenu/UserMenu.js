import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import css from '../UserMenu/UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.block}>
      <p className={css.welcome}>
        Welcome, <span className={css.userName}>{user.name}</span>
      </p>
      <button
        type="button"
        onClick={() => dispatch(logOut())}
        className={css.BtnLogOut}
      >
        Logout
      </button>
    </div>
  );
};
