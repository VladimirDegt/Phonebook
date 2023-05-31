import { useState } from "react";
import PropTypes from 'prop-types';
import { StyledSection } from './Contacts.styled';
import Filter from "components/Filter/Filter";
import ContactList from "components/ContactList/ContactList";

function Contacts({contacts, onDeleteContact}){
  const [vidibleContacts, setVidibleContacts] = useState('');

  function handleInputChange({target}){
    setVidibleContacts(target.value)
  }

  function findContact(){
    return contacts.filter((item) => 
      item.name.toLowerCase().includes(vidibleContacts.toLowerCase())
    )
  }

  return (
    <StyledSection>
      <h2>Contacts</h2>
      <Filter 
        handleInputChange = {handleInputChange}
        value={vidibleContacts}
      />
      <ContactList
        findValue = {vidibleContacts}
        findContact = {findContact}
        onDeleteContact = {onDeleteContact}
      />
    </StyledSection>
  )
}

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
}

export default Contacts;
