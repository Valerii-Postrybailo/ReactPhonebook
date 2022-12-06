import React from 'react';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css'

import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from '../../redux/operations';

export default function ContactForm (){

  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contactsSlice.contacts.items);

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const contactNameId = nanoid();
  const phoneNumberId = nanoid();

  const handleInputChange = e => {
    const { name, value } = e.target;

    if (name === 'name') {
      return setName(value);
    } else if (name === 'number') {
      return setPhone(value);
    }
  };

  const reset = () => {
    setName('');
    setPhone('');
  };

  const onSubmitChange = evt => {
    evt.preventDefault();
    let data = { name, phone };
    let findName = contacts.find(
      item => item.name.toLowerCase() === data.name.toLowerCase()
    );

    if (findName) {
      return alert(`${data.name} is already in contact`);
    } else {
      dispatch(addContacts(data));
    }

    reset();
  };

  const isAdded = useSelector(state => state.contactsSlice.isAdded);
    return(
      <form onSubmit={onSubmitChange}>
        <label>
          Name{''}
            <input className={css.input}
              type="text"
              id={contactNameId}
              value={name}
              onChange={handleInputChange}
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
        </label>

        <label>
          Number{''}
            <input className={css.input}
              type="tel"
              name="number"
              id={phoneNumberId}
              value={phone}
              onChange={handleInputChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
        </label>

          <button type="submit" disabled={isAdded}>Add contact</button>

      </form>
    )
}