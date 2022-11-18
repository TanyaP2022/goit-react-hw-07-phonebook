import { ContactListStyle, ContactButton, ContactItemStyle } from './ContactListStyled';
import { deleteContact } from '../../redux/operations';
import {useSelector, useDispatch } from 'react-redux';

import { selectFilter, selectContacts } from '../../redux/selectors';

export const ContactList = () =>{
  const dispatch = useDispatch();
  const filterName = useSelector(selectFilter);
  const contactItems = useSelector(selectContacts);
  
  const currentContacts =  contactItems.filter(contact => {
    return contact.name.toLowerCase().includes(filterName.toLowerCase())|| contact.phone.toLowerCase().includes(filterName.toLowerCase());
  });
  
  const elements = currentContacts.map(({ name, phone, id }) => {
    return <ContactItemStyle key={id}>{name}: {phone}
      <ContactButton
        type="button"
        onClick={() => dispatch(deleteContact(id))}>
        Delete
      </ContactButton>
      </ContactItemStyle>
    })
    return (
      <ContactListStyle>{elements}</ContactListStyle>
    )
}