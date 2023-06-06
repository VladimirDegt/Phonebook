import { useState, useEffect } from "react";
import { 
    StyledBackdrop,  
    StyledModal, 
    StyledButtonClose,
    StyledFormModal,
    StyledTitleModal,
    StyledButtonList,
    StyledLink,
    StyledInfoList,
    StyledText,
} from "./ModalInfoContact.styled";
import IconClose from "utils/search-svg";
import IconTelephoneFill from "utils/telefon-svg";
import IconViber from "utils/viber-svg";
import IconEnvelope from "utils/envelope-svg";

export function ModalInfoContact({firstName, secondName, email, number, textarea}) {
    const [isOpenModal, setIsOpenModal] = useState(true);

    useEffect(()=>{
        function handleEsc(e) {
            if (e.code === "Escape") {
                setIsOpenModal(false)
            }
          };

        document.addEventListener('keydown', handleEsc);
        return () => {
        document.removeEventListener('keydown', handleEsc);  
        }  
    }, []);

    function handleClickBackdrop(e) {
        if(e.target !== e.currentTarget){
          return;
        }
        setIsOpenModal(false)
      };

    function handlerModalClose(){
        setIsOpenModal(false);
    };

    return (
        isOpenModal &&
        <StyledBackdrop onClick={handleClickBackdrop}>
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
                            <StyledText>{textarea}</StyledText>
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
                            <StyledLink href={`mailto:${email}`} target="_blank" onClick={handlerModalClose}>
                                <IconEnvelope/>
                            </StyledLink>
                        </li>
                    </StyledButtonList>
                </StyledFormModal>
            </StyledModal>
        </StyledBackdrop>
    )
}