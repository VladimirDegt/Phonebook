import { useEffect, useState } from "react";
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix';
import AddContactsForm from "./AddContactsForm";
import Contacts from "./Contacts";
import { StyledContainer } from './App.styled';
import { getItemLocalStorage, setItemLocalStorage } from "localStorage";

export function App(){
  const [contacts, setContacts] = useState([])

  useEffect(()=>{
    if(!getItemLocalStorage()){
      setItemLocalStorage(contacts)
    } else {
        setContacts(JSON.parse(getItemLocalStorage()))
    }
  }, []);

  useEffect(()=>{
    if(contacts.length !== 0){
      setItemLocalStorage(contacts)
    }
  }, [contacts]);

  function createContact(data){
    const newContact = {
      ...data,
      id: nanoid(),
    }
    addContact(newContact)
  };

  function addContact(newContact) {
    if(contacts.some((item)=>{
      return item.name.toLowerCase() === newContact.name.toLowerCase()
    })) {
      Notify.failure('Такий контакт вже записано!')
      return
    }
    Notify.success('Контакт записано!')
    setContacts((prevState)=>[...prevState, newContact])
  };

  function deleteContact(contactId) {
    setContacts(contacts.filter( (item) => item.id !== contactId))
    Notify.info('Контакт видалено!')
  };

  return (
    <StyledContainer>
      <AddContactsForm 
        createContact={(data)=>createContact(data)}
      />
      <Contacts 
        contacts={contacts}
        onDeleteContact = {deleteContact}
      />
    </StyledContainer>
  );
};
