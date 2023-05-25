import { useState } from 'react';
import css from './Form.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { ToastContainer, toast } from 'react-toastify';
import { nanoid } from 'nanoid';

export function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const { contacts } = useSelector(state => state.contacts);

  function handleChange(evt) {
    const { name, value } = evt.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return toast.warning(`${name} is alredy in contacts.`, {
        autoClose: 2000,
        theme: 'colored',
      });
    } else if (contacts.find(contact => contact.number === number)) {
      return toast.warning(`${number} is already in contacts`, {
        autoClose: 2000,
        theme: 'colored',
      });
    } else {
      dispatch(
        addContact({
          id: nanoid(),
          name,
          number: number,
          createdAt: Date.now(),
        })
      );
      toast.success(`${name} has been added`, {
        autoClose: 2000,
        theme: 'colored',
      });
    }
    setName('');
    setNumber('');
  }

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label>
        <input
          className={css.item}
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        <input
          className={css.item}
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={css.formBtn} type="submit">
        Add contact
      </button>
      <ToastContainer />
    </form>
  );
}
