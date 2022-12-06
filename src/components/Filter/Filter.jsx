import css from './Filter.module.css'

import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../redux/contactsSlice';

export const Filter = () => {

  const filter = useSelector(state => state.contactsSlice.contacts.filter.value);
  const dispatch = useDispatch();

  const onChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return(
    <label className = {css.form_label}>
    Find contacts by name
    <input onChange={onChange} 
      type="text" 
      name="filter" 
      value={filter} 
    />
  </label>
  )
};


