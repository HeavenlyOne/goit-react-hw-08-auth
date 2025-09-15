import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { selectFilteredContacts } from '../../redux/contacts/contactsSlice';

export default function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);

  // console.log(filteredContacts);
  return (
    <ul className={css.contactList}>
      {filteredContacts &&
        filteredContacts.map(contact => (
          <li className={css.contact} key={contact.id}>
            <Contact contact={contact} />
          </li>
        ))}
    </ul>
  );
}
