
import { useDispatch } from "react-redux"
import { fetchContacts } from "../../redux/contacts/contactsOps"
import { useEffect } from "react"
// import './App.css';
import ContactForm from '../../components/ContactForm/ContactForm';
import SearchBox from '../../components/SearchBox/SearchBox';
import ContactList from '../../components/ContactList/ContactList';

export default function ContactsPage() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch])

    return (
      <>
        <h1>Phonebook</h1>
        <div className="container">
          <ContactForm />
          <SearchBox />
        </div>
        <ContactList />
      </>
    );
}