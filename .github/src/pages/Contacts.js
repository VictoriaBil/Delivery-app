import { Form } from '../components/Form/Form';
import { ContactList } from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';
import Notification from '../components/Notification/Notification';
import { useSelector } from 'react-redux';
import css from '../components/App.module.css';

const Contacts = () => {
  const { contacts } = useSelector(state => state.contacts);

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <Form />
      <h2 className={css.title}>Contacts</h2>
      {contacts.length === 0 ? (
        <Notification message="There are no contacts in your phonebook yet" />
      ) : (
        <Filter />
      )}
      <ContactList />
    </div>
  );
};

export default Contacts;
