import { 
    StyledBackdrop, 
    StyledModal, 
    StyledButtonClose, 
    StyledTitleModal, 
    StyledFormModal,
    StyledInputModal,
    StyledTextArea,
    StyledButtonModal,
} from "./Modal.styled";
import IconClose from "utils/search-svg";
import { useState } from "react";
import { database } from "index";

export function Modal({ModalClose}){
    const [firstName, setFirstName] = useState('');
    const [secondName, setSecondName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [textarea, setTextarea] = useState('');

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
    
        const contact = {
            firstName,
            secondName,
            email,
            number,
            textarea,
        };
        
        setFirstName('');
        setSecondName('');
        setEmail('');
        setNumber('');
        setTextarea('');
      };

    function handlerModalClose(){
        console.log(database);
        ModalClose()
    };

    return (
        <StyledBackdrop>
            <StyledModal>
                <StyledButtonClose type="button" onClick={handlerModalClose}>
                    <IconClose />
                </StyledButtonClose>
                <StyledFormModal onSubmit={handleFormSubmit}>
                <StyledTitleModal>Інформація про замовника</StyledTitleModal>
                    <StyledInputModal
                        type="text"
                        autoComplete="on"
                        autoFocus
                        placeholder="Назва підприємства"
                        name="firstName"
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
                        onChange={handleInputVisible}
                        value={email}
                    />
                    <StyledInputModal
                        type="tel"
                        autoComplete="off"
                        placeholder="0501112223"
                        name="number"
                        onChange={handleInputVisible}
                        value={number}
                    />
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

