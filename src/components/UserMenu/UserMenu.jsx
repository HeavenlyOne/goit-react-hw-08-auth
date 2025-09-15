import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import { logOut } from '../../redux/auth/operations';
import css from './UserMenu.module.css';

export default function UserMenu() {
  const userName = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <div>
      <p className={css.wellcome}>Wellcome, {userName.name}</p>
      <button className={css.logoutBtn} type="button" onClick={() => dispatch(logOut())}>
        Log out
      </button>
    </div>
  );
}
