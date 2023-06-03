import { 
    StyledBackdrop, 
    StyledModal, 
    StyledButtonClose, 
    StyledTitleModal, 
    StyledFormModal,
    StyledButtonModal,
} from "./ModalCall.styled";
import IconClose from "utils/search-svg";

export function ModalCall({ModalClose}){
    function handlerModalClose(){
        ModalClose()
    };

    return (
        <StyledBackdrop>
            <StyledModal>
                <StyledButtonClose type="button" onClick={handlerModalClose}>
                    <IconClose />
                </StyledButtonClose>
                <StyledFormModal >
                <StyledTitleModal>Інформація про замовника</StyledTitleModal>
                    <StyledButtonModal type="button" >Подзвонити</StyledButtonModal>
                    <StyledButtonModal type="button" >Інше</StyledButtonModal>
                </StyledFormModal>
            </StyledModal>
        </StyledBackdrop>    
    )
};