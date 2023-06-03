import { useState } from "react";
import { 
    StyledBackdrop,  
    StyledModal, 
    StyledButtonClose,
    StyledFormModal,
    StyledTitleModal,
    StyledButtonList,
    StyledLink,
    StyledInfoList,
} from "./ModalInfoContact.styled";
import IconClose from "utils/search-svg";
import IconTelephoneFill from "utils/telefon-svg";
import IconViber from "utils/viber-svg";
import IconWrite from "utils/email-svg";

export function ModalInfoContact({firstName, secondName, email, number, textarea}) {
    const [isOpenModal, setIsOpenModal] = useState(true);

    function handlerModalClose(){
        setIsOpenModal(false);
    };

    return (
        isOpenModal &&
        <StyledBackdrop>
            <StyledModal>
                <StyledButtonClose type="button" onClick={handlerModalClose}>
                    <IconClose />
                </StyledButtonClose>

                <StyledFormModal >
                <StyledTitleModal>Інформація про замовника</StyledTitleModal>
                    <StyledInfoList>
                        <li>
                            <h3>Назва:</h3>
                            <p>{firstName}</p>
                        </li>
                        <li>
                            <h3>Представник:</h3>
                            <p>{secondName}</p>
                        </li>
                        <li>
                            <h3>Телефон:</h3>
                            <p>+38{number}</p>
                        </li>
                        <li>
                            <h3>Email:</h3>
                            <p>{email}</p>
                        </li>
                        <li>
                            <h3>Примітка:</h3>
                            <p>{textarea}</p>
                        </li>
                    </StyledInfoList>
                    <StyledButtonList>
                        <li>
                            <StyledLink href={`tel:+38${number}`} onClick={handlerModalClose}>
                                <IconTelephoneFill/>
                            </StyledLink>
                        </li>
                        <li>
                            <StyledLink href={`viber://chat?number=+38${number}`} onClick={handlerModalClose}>
                                <IconViber/>
                            </StyledLink>
                        </li>
                        <li>
                            <StyledLink href={`mailto:${email}`} >
                                <IconWrite/>
                            </StyledLink>
                        </li>
                    </StyledButtonList>
                </StyledFormModal>
            </StyledModal>
        </StyledBackdrop>
    )
}