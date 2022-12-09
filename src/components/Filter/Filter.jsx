import React from 'react';
import { TextFieldStyled } from './Filter.styled';
//
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filter/filterSlice';
import debounce from 'lodash.debounce';

function Filter() {
  const dispatch = useDispatch();

  const onFilterChange = event => {
    const value = event.target.value;
    dispatch(setFilter(value));
  };

  const onFilterChangeDebounced = debounce(onFilterChange, 500);

  return (
    <TextFieldStyled
      id="search"
      name="search"
      label="Find contacts by name"
      variant="standard"
      sx={{ marginBottom: '25px', width: '300px' }}
      onChange={onFilterChangeDebounced}
    />
  );
}

export default Filter;
