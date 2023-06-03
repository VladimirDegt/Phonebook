import { useEffect, useState } from "react";
import { debounce } from "lodash";
import { StyledHeader, StyledForm, StyledFormInput, StyledButtonClick } from './Searchbar.styled';
import { Modal } from "components/Modal/Modal";

function Searchbar({getContact}) {
  const [visibleContact, setVisibleContact] = useState('');
  const [isOpenModal, setIsOpenModal] = useState(false);

const debouncedHandleInputChange = debounce((value) => {
    getContact(value);
}, 300);

useEffect(()=>{
  debouncedHandleInputChange(visibleContact);
}, [visibleContact]);

function handleInputChange ({target}) {
    setVisibleContact(target.value);
  };

function handleModalOpen(){
  setIsOpenModal(true)
};

function ModalClose(){
  setIsOpenModal(false)
};

return (
  <StyledHeader>
    <StyledForm >
      <StyledFormInput
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Шукати замовника"
        onChange={handleInputChange}
        value={visibleContact}
      />
    </StyledForm>
    <StyledButtonClick type="button" onClick={handleModalOpen}>Новий</StyledButtonClick>
    {isOpenModal && <Modal ModalClose={ModalClose}/>}
  </StyledHeader>
)
}

export default Searchbar;

