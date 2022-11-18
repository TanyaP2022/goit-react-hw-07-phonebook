import { nanoid } from 'nanoid'
import {ContactFormStyle, ContactFormLabel, ContactFormInput} from './ContactFormStyled'
import { useState } from 'react';

import { selectContacts } from '../../redux/selectors';
import { addContact } from '../../redux/operations';
import { useDispatch, useSelector } from 'react-redux';


export default function ContactForm() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    let nameId = nanoid();
    let contactId = nanoid();

    const dispatch = useDispatch();
     const contacts = useSelector(selectContacts);

   const addNewContact = ({ name, phone }) => {
     const normalizedName = name.toLowerCase();
     const normalizedPhone = phone.toLowerCase();

    const findName = contacts.find(
      contact => contact.normalizedName === normalizedName|| contact.normalizedPhone === normalizedPhone
    );
    if (findName) {
      return alert(`${name} is already in contacts.`);
    }
    const findNumber = contacts.find(
      contact => contact.phone === phone || contact.name === name 
    );
    if (findNumber) {
      return alert(`${name}/${phone} is already in contacts!`)
    }   
     dispatch(addContact({ name, phone }));
  };    
    
   const handleChange = e => {
       const { name, value } = e.currentTarget;
       switch (name) {
           case 'name':
               setName(value);
               break;
           case 'phone':
               setPhone(value);
               break;
           default:
               return;
       }
    };

    const handleSubmit = e => {
        e.preventDefault();
        addNewContact({ name, phone });
        reset();
    };

    const reset = () => {
        setName('');
        setPhone('');
    };

    return (
        <ContactFormStyle onSubmit={handleSubmit}>
            <ContactFormLabel htmlFor={nameId}>
                Name <ContactFormInput
                    id={nameId}
                    type="text"
                    name="name"
                    value ={name}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    onChange={handleChange}
                />
            </ContactFormLabel>
            <ContactFormLabel htmlFor={contactId}>
                Phone <ContactFormInput
                    id={contactId}
                    type="tel"
                    name="phone"
                    value ={phone}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    onChange={handleChange}
                />
            </ContactFormLabel>
            <button type="submit">add contact</button>
        </ContactFormStyle>
        );
    }