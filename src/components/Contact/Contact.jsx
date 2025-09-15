import { useDispatch } from 'react-redux';
import css from './Contact.module.css';
import { deleteContact } from '../../redux/contacts/contactsOps';

export default function Contact({ contact }) {
  const dispatch = useDispatch();

  const { name, number, id } = contact;
  return (
    <div className={css.contactBlock}>
      <div className={css.contact}>
        <p>{name}</p>
        <p>{number}</p>
      </div>

      <div className={css.dbPlace}>
        <button
          className={css.deleteButton}
          type="button"
          onClick={() => dispatch(deleteContact({ id }))}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
