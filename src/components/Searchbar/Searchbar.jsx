import { useState } from "react";
import { StyledHeader, StyledForm, StyledFormInput, StyledButtonClick } from './Searchbar.styled';
import { Modal } from "components/Modal/Modal";

function Searchbar() {
  const [visibleContact, setVisibleContact] = useState('');
  const [isOpenModal, setIsOpenModal] = useState(false);

function handleInputChange ({target}) {
    setVisibleContact(target.value.toLowerCase())
  };

function handleButtonClick(){
  setIsOpenModal(true)
};

return (
  <StyledHeader>
    <StyledForm >
      <StyledFormInput
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Введіть назву замовника"
        onChange={handleInputChange}
        value={visibleContact}
      />
    </StyledForm>
    <StyledButtonClick type="button" onClick={handleButtonClick}>Додати замовника</StyledButtonClick>
    {isOpenModal && <Modal/>}
  </StyledHeader>
)
}

export default Searchbar;

