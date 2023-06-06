import { Notify } from "notiflix";
import { ref, remove } from "firebase/database";
import { useEffect } from "react";
import { db } from "utils/firebase";
import { 
  StyledBackdrop, 
  StyledModal, 
  StyledButtonClose, 
  StyledTitleModal, 
  StyledButtonModal,
} from "./ModalDeleteContact.styled";
import IconClose from "utils/search-svg";

export function ModalDeleteContact({modalDeleteClose, id}) {

  useEffect(()=>{
    function handleEsc(e) {
        if (e.code === "Escape") {
          modalDeleteClose()
        }
    };
    document.addEventListener('keydown', handleEsc);
    return () => {
    document.removeEventListener('keydown', handleEsc);  
    }  
}, [modalDeleteClose]);

  function handleClickBackdrop(e) {
    if(e.target !== e.currentTarget){
      return;
    }
    modalDeleteClose()
  };

  function handlerModalClose(){
    modalDeleteClose()
};

function handleDeleteContact() {
    const contactRef = ref(db, `contacts/${id}`);
    remove(contactRef)
      .then(() => {
        Notify.success('Контакт видалено!', {
            position: 'center-top',
            distance: '100px',
          })
      })
      .catch((error) => {
        console.error("Ошибка при удалении объекта из базы данных:", error);
      });
    modalDeleteClose();  
}

  return (
    <StyledBackdrop onClick={handleClickBackdrop}>
      <StyledModal >
          <StyledButtonClose type="button" onClick={handlerModalClose}>
              <IconClose />
          </StyledButtonClose>
            <StyledTitleModal>Видалити?</StyledTitleModal>
            <StyledButtonModal type="button" onClick={handleDeleteContact}>Так</StyledButtonModal>
    </StyledModal>
</StyledBackdrop> 
  )
}