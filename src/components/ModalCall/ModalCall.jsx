import { useState } from "react";
import { 
    StyledBackdrop, 
    StyledModal, 
    StyledButtonClose, 
    StyledTitleModal, 
    StyledFormModal,
    StyledButtonModal,
    StyledButtonList,
    StyledSpan,
    StyledLink,
} from "./ModalCall.styled";
import IconClose from "utils/search-svg";
import IconTelephoneFill from "utils/telefon-svg";
import { ModalInfoContact } from "components/ModalInfoContact/ModalInfoContact";

export function ModalCall({ModalClose, id, firstName, secondName, email, number, textarea}){
    const [isOpenModal, setIsOpenModal] = useState(false);

    function handlerModalClose(){
        ModalClose()
    };

    function handleModalInfoContactOpen(){
        setIsOpenModal(true);
        // ModalClose();
    }

    return (
        <>
        <StyledBackdrop>
            <StyledModal>
                <StyledButtonClose type="button" onClick={handlerModalClose}>
                    <IconClose />
                </StyledButtonClose>

                <StyledFormModal >
                <StyledTitleModal>Будемо дзвонити:</StyledTitleModal>
                    <StyledSpan>Номер:</StyledSpan><StyledSpan>+38{number}</StyledSpan>
                    <StyledSpan>Представник:</StyledSpan><StyledSpan>
                    {secondName ? secondName : "ім'я не внесено"}
                        </StyledSpan>
                    <StyledButtonList>
                        <li>
                            <StyledLink href={`tel:+38${number}`} onClick={handlerModalClose}>
                                <IconTelephoneFill/>
                            </StyledLink>
                        </li>
                        <li><StyledButtonModal type="button" onClick={handleModalInfoContactOpen}>Інше</StyledButtonModal></li>
                    </StyledButtonList>
                </StyledFormModal>
            </StyledModal>
        </StyledBackdrop>

        {isOpenModal && 
        <ModalInfoContact
            firstName = {firstName}
            secondName = {secondName}
            email = {email}
            number = {number}
            textarea = {textarea}
        />}
        </>    
    )
};