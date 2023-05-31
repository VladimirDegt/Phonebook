import PropTypes from 'prop-types';
import { StyledList, StyledItemList } from './ContactList.styled';

function ContactList({ findValue, findContact, onDeleteContact}){
  return (
    <StyledList> 
      {findValue && findContact().map((item)=>{
      return (
        <StyledItemList key={item.id}>
          <span>{item.name}: </span>
          <a href={`tel:+38${item.number}`}>{item.number}</a>
          <span>{' Viber'}: </span>
          <a href={`viber://chat?number=+38${item.number}`}>{item.number}</a>
          <button 
            type="button"
            onClick={()=>onDeleteContact(item.id)}
            > delete
          </button>
        </StyledItemList>
      ) 
      })}
    </StyledList>
  )
};

ContactList.propTypes = {
  findValue: PropTypes.string.isRequired,
  findContact: PropTypes.func.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;