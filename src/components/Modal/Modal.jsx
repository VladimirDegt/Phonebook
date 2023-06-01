import { 
    StyledBackdrop, 
    StyledModal, 
    StyledButtonClose, 
    StyledTitleModal, 
    StyledFormModal,
    StyledInputModal,
    StyledTextArea,
    StyledButtonModal,
} from "./Modal.styled"
import IconClose from "utils/search-svg"

export function Modal({ModalClose}){
    function handlerModalClose(){
        ModalClose()
    }

    return (
        <StyledBackdrop>
            <StyledModal>
                <StyledButtonClose type="button" onClick={handlerModalClose}>
                    <IconClose />
                </StyledButtonClose>
                <StyledFormModal>
                <StyledTitleModal>Інформація про замовника</StyledTitleModal>
                    <StyledInputModal
                        type="text"
                        autoComplete="on"
                        autoFocus
                        placeholder="Назва підприємства"
                        name="firstName"
                        // onChange={handleInputChange}
                        // value={visibleFirstName}
                    />
                    <StyledInputModal
                        type="text"
                        autoComplete="on"
                        placeholder="Ім'я представника"
                        name="secondName"
                        // onChange={handleInputChange}
                        // value={visibleFirstName}
                    />
                    <StyledInputModal
                        type="email"
                        autoComplete="on"
                        placeholder="Email"
                        name="email"
                        // onChange={handleInputChange}
                        // value={visibleFirstName}
                    />
                    <StyledInputModal
                        type="tel"
                        autoComplete="off"
                        placeholder="0501112223"
                        name="number"
                        // onChange={handleInputChange}
                        // value={visibleFirstName}
                    />
                    <StyledTextArea rows="4" placeholder="Примітка"></StyledTextArea>
                    <StyledButtonModal type="submit">Підтвердити</StyledButtonModal>
                </StyledFormModal>
            </StyledModal>
        </StyledBackdrop>    
    )
};

