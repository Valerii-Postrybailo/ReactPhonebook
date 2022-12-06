import css from './ContactList.module.css'
import { useEffect } from 'react';

import { deleteContacts } from '../../redux/operations';
import { fetchContacts } from '../../redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../Loader/Loader';
import { nanoid } from 'nanoid';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contactsSlice.contacts.items);
  const filter =  useSelector(
    state => state.contactsSlice.contacts.filter.value
  );

  const isLoading = useSelector(state => state.contactsSlice.isLoading);
  const error = useSelector(state => state.contactsSlice.error);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter(contact =>
    
    contact.name.toLowerCase().includes(normalizedFilter)

    
  );

  return(
    <ul>
      {error && <li>{error}</li>}

      {isLoading && <Loader/>} 

      {visibleContacts.map(({id,name,phone}) => (
        <li key = {nanoid()}>
          {name}: {phone}
            <button type="button" onClick = {() => dispatch(deleteContacts(id))} className={css.list_btn}>
              Delete
            </button>
        </li>
      ))}
    </ul>
  )
}

