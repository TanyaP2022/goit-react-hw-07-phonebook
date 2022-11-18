import {  useDispatch } from 'react-redux';
import { useEffect } from 'react';
import ContactForm  from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { fetchContacts } from '../redux/operations';
import { Container, ContainerHed, ContainerHeder } from './AppStyled';

export const App = () => {
  const dispatch = useDispatch();
  
  useEffect(() => { dispatch(fetchContacts()) }, [dispatch]);

  return (
        <Container>
            <ContainerHed>Phonebook</ContainerHed>
            <ContactForm  />
            <ContainerHeder>Contacts</ContainerHeder>
            <Filter />
            <ContactList />
        </Container>
      );
}
