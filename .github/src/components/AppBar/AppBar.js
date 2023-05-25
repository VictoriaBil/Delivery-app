import { useAuth } from '../../hooks/useAuth';
import { Navigation } from './Navigation/Navigation';
import { UserMenu } from './UserMenu/UserMenu';
import { NavAuth } from './Navigation/NavAuth';
import css from '../AppBar/AppBar.module.css';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <div className={css.headerBlock}>
      <header className={css.header}>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <NavAuth />}
      </header>
    </div>
  );
};
