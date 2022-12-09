import React, { useEffect } from 'react';
import Filter from 'components/Filter';
import ContactForm from 'components/ContactForm';
import Box from '../Box';
import ContactsTable from 'components/ContactsTable';
import { useTheme } from '@mui/material/styles';
import { ToastContainer } from 'react-toastify';
//
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';
import { selectIsLoggedIn } from 'redux/user/selectors';

export default function PhoneBook() {
  const theme = useTheme();

  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    if (!isLoggedIn) return;
    dispatch(fetchContacts());
  }, [dispatch, isLoggedIn]);

  return (
    <Box>
      <Box
        as="h1"
        pt="20px"
        pb="10px"
        margin="0 auto"
        color={theme.palette.text.primary}
      >
        Phonebook
      </Box>
      <ContactForm />
      <Box as="h2" mb="0" color={theme.palette.text.primary} >
        Contacts
      </Box>
      <Filter />
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactsTable />

      <ToastContainer position="top-right" autoClose={2000} theme="colored" />
    </Box>
  );
}