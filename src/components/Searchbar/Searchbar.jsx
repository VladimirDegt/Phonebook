import { Button } from '@chakra-ui/react'
import { useEffect, useState } from "react";
import { debounce } from "lodash";
import { StyledHeader, StyledForm, StyledFormInput } from './Searchbar.styled';
import { Modal } from "components/Modal/Modal";
import { ThemeSwitcher } from "components/ThemeSwitcher";

function Searchbar({getContact}) {
  const [visibleContact, setVisibleContact] = useState('');
  const [isOpenModal, setIsOpenModal] = useState(false);

useEffect(()=>{
  const debouncedHandleInputChange = debounce((value) => {
    getContact(value);
}, 300);

  debouncedHandleInputChange(visibleContact);
}, [visibleContact, getContact]);

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
      <ThemeSwitcher />
    <StyledForm >
      <StyledFormInput
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="search..."
        onChange={handleInputChange}
        value={visibleContact}
      />
    </StyledForm>
    <Button 
    type="button" 
    onClick={handleModalOpen} 
    height='46px'
    borderRadius='4px'
    transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
    >+Новий</Button>
    {isOpenModal && <Modal ModalClose={ModalClose}/>}
  </StyledHeader>
)
}

export default Searchbar;

