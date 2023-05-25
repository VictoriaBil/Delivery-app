import React from 'react';
import css from './ContactList.module.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts, removeContact } from '../../redux/contacts/operations';
import { Loader } from '../Loader/Loader';
import 'react-toastify/dist/ReactToastify.css';

export function ContactList() {
  const dispatch = useDispatch();
  const filterValue = useSelector(state => state.filter.filter);
  const { contacts, isLoading, error } = useSelector(state => state.contacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  function filteredContacts() {
    const normalisedFilter = filterValue.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalisedFilter)
    );
  }

  return (
    <>
      {isLoading && <Loader />}
      {error && 'Something went wrong. Please, try again'}
      {contacts.length > 0 && !isLoading && !error && (
        <>
          <ul className={css.list}>
            {filteredContacts().map(({ name, number, id }) => {
              return (
                <li className={css.contact} key={id}>
                  <p className={css.name}>{name}</p> :
                  <p className={css.phone}>{number}</p>
                  <button
                    className={css.contactBtn}
                    type="button"
                    onClick={() => dispatch(removeContact(id))}
                  >
                    Delete
                  </button>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </>
  );
}
