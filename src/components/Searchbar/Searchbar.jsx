import { useState } from "react";
import { StyledHeader, StyledForm, StyledFormInput, StyledButtonClick } from './Searchbar.styled';
import { Modal } from "components/Modal/Modal";

function Searchbar() {
  const [visibleContact, setVisibleContact] = useState('');
  const [isOpenModal, setIsOpenModal] = useState(false);

function handleInputChange ({target}) {
    setVisibleContact(target.value.toLowerCase())
  };

function handleModalOpen(){
  setIsOpenModal(true)
};

function ModalClose(){
  setIsOpenModal(false)
}

return (
  <StyledHeader>
    <StyledForm >
      <StyledFormInput
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Пошук замовника"
        onChange={handleInputChange}
        value={visibleContact}
      />
    </StyledForm>
    <StyledButtonClick type="button" onClick={handleModalOpen}>Додати замовника</StyledButtonClick>
    {isOpenModal && <Modal ModalClose={ModalClose}/>}
  </StyledHeader>
)
}

export default Searchbar;

