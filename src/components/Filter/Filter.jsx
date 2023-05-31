import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

const inputFindId = nanoid();

function Filter({handleInputChange, value}){
  return(
    <>
      <label htmlFor={inputFindId}>Find contacts by name</label>
      <input
        id = {inputFindId}
        type="text"
        name="vidibleContacts"
        required
        onChange={handleInputChange}
        value={value}
      /> 
    </>
  )
};

Filter.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Filter;