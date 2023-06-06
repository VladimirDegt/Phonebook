import { ref, update } from 'firebase/database';
import { db } from "utils/firebase";
import { useEffect, useState } from "react";
import { 
    StyledBackdrop, 
    StyledModal, 
    StyledButtonClose, 
    StyledTitleModal, 
    StyledFormModal,
    StyledInputModal,
    StyledContainerInput,
    StyledSvgInput,
    StyledTextArea,
    StyledButtonModal,
} from "./ModalChange.styled";
import IconClose from "utils/search-svg";
import { Notify } from 'notiflix';

export function ModalChange(props){
    const { modalChangeClose } = props;
    const [firstName, setFirstName] = useState(props.firstName);
    const [secondName, setSecondName] = useState(props.secondName);
    const [email, setEmail] = useState(props.email);
    const [number, setNumber] = useState(props.number);
    const [textarea, setTextarea] = useState(props.textarea);

    useEffect(()=>{
        function handleEsc(e) {
            if (e.code === "Escape") {
              modalChangeClose()
            }
        };

        document.addEventListener('keydown', handleEsc);
        return () => {
        document.removeEventListener('keydown', handleEsc);  
        }  
    }, [modalChangeClose]);

    function handleInputVisible({target}){
      switch(target.name){
          case 'firstName':
              setFirstName(target.value);
              break;
          case 'secondName':
              setSecondName(target.value);
              break;
          case 'email':
              setEmail(target.value);
              break;
          case 'number':
              setNumber(target.value);
              break;
          case 'textarea':
              setTextarea(target.value);
              break;
          default:
              return;
      }
  };

    function handleFormSubmit(e){
        e.preventDefault()

        if (number.length !== 10) {
            Notify.failure('Невірний формат номеру!', {
              position: 'center-top',
              distance: '100px',
            })
            return;
        }

        const updateContact = {
          firstName,
          secondName,
          email,
          number,
          textarea,
      };
      
      const contactRef = ref(db, `contacts/${props.id}`);
      update(contactRef, updateContact)
        .then(() => {
          Notify.success('Контакт оновлено!', {
            position: 'center-top',
            distance: '100px',
          })
          modalChangeClose();
        })
        .catch((error) => {
          console.error("Ошибка при обновлении контакта:", error);
        });
    };

    function handleClickBackdrop(e) {
        if(e.target !== e.currentTarget){
          return;
        }
        modalChangeClose()
      };

    function handlerModalClose(){
      modalChangeClose()
    };

    return (
      <StyledBackdrop onClick={handleClickBackdrop}>
      <StyledModal >
          <StyledButtonClose type="button" onClick={handlerModalClose}>
              <IconClose />
          </StyledButtonClose>
          <StyledFormModal onSubmit={handleFormSubmit}>
          <StyledTitleModal>Інформація про замовника</StyledTitleModal>
              <StyledInputModal
                  type="text"
                  autoComplete="on"
                  placeholder="Назва підприємства"
                  name="firstName"
                  required
                  onChange={handleInputVisible}
                  value={firstName}
              />
              <StyledInputModal
                  type="text"
                  autoComplete="on"
                  placeholder="Ім'я представника"
                  name="secondName"
                  onChange={handleInputVisible}
                  value={secondName}
              />
              <StyledInputModal
                  type="email"
                  autoComplete="on"
                  placeholder="Email"
                  name="email"
                  required
                  onChange={handleInputVisible}
                  value={email}
              />
              <StyledContainerInput>
                  <StyledInputModal
                      type="tel"
                      autoComplete="off"
                      placeholder="0501112223"
                      name="number"
                      required
                      pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                      title="Номер повинен починатися з 050, 096, інше та ще 7 цифр"
                      onChange={handleInputVisible}
                      value={number}
                      />
                  <StyledSvgInput>+38</StyledSvgInput>
              </StyledContainerInput>
              <StyledTextArea 
                  rows="4" 
                  placeholder="Примітка" 
                  name="textarea" 
                  onChange={handleInputVisible}
                  value={textarea}
              />
              <StyledButtonModal type="submit" >Підтвердити</StyledButtonModal>
          </StyledFormModal>
      </StyledModal>
  </StyledBackdrop> 
    )
};

