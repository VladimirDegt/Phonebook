import { nanoid } from 'nanoid'
import { useState } from 'react';
import PropTypes from 'prop-types';
import { StyledSection, StyledForm, StyledButton } from './AddContactsForm.styled';

const inputNameId = nanoid();
const inputNumberId = nanoid();

function AddContactsForm({createContact}){
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  function handleInputChange({target}) {
    switch(target.name) {
      case 'name':
        setName(target.value)
        break;
      case 'number':
        setNumber(target.value)
        break;
      default:
        return;
    }
  };

  function handleFormSubmit(e){
    e.preventDefault()

    createContact({
      name,
      number,
    });
    setName('');
    setNumber('');
  };

  return (
    <StyledSection>
      <h1>Phonebook</h1>
      <StyledForm onSubmit={handleFormSubmit}>
        <label htmlFor={inputNameId}>Name</label> 
        <input
          id={inputNameId}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleInputChange}
          value={name}
        />
        <label htmlFor={inputNumberId}>Number</label> 
        <input
          id={inputNumberId}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleInputChange}
          value={number}
        />
        <StyledButton type="submit">Add contacts</StyledButton>
      </StyledForm> 
    </StyledSection>
  )
}

AddContactsForm.propTypes = {
  createContact: PropTypes.func.isRequired,
};

export default AddContactsForm;
