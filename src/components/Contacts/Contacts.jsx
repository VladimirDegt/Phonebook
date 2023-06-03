import { useEffect, useState } from "react";
import { db } from "utils/firebase";
import { ref, get } from "firebase/database";
import { StyledContainerList, StyledItemList } from "./Contacts.styled";
import { ModalCall } from "components/ModalCall/ModalCall";

export function ContactsList({visibleContact}){
    const [contact, setContact] = useState('');
    const [listContacts, setListContacts] = useState([]);
    const [isOpenModal, setIsOpenModal] = useState(false);
    
    useEffect(()=>{
        if(visibleContact !== contact){
            setContact(visibleContact)
        };
        if(contact){
            // Получение ссылки на "contacts" в базе данных
            const contactsRef = ref(db, 'contacts');
        
            // Получение данных из базы данных
            get(contactsRef)
            .then((snapshot) => {
                if (snapshot.exists()) {
                const data = snapshot.val();
                const values = Object.values(data);
                
                setListContacts(values.filter((item)=> item.firstName.toLowerCase().includes(contact.toLowerCase())));
        
                } else {
                console.log('Данные не найдены');
                }
            })
            .catch((error) => {
                console.error('Ошибка при получении данных из базы данных:', error);
            });
            }
    },[contact, visibleContact]);

    function handleBtnClick() {
        handleModalOpen();
    };

    function handleModalOpen(){
        setIsOpenModal(true)
      };
      
      function ModalClose(){
        setIsOpenModal(false)
      };

    return(
        <>
        <StyledContainerList>
        {contact &&
        listContacts.map((item) => 
            <li key={item.id}>
                <StyledItemList onClick={handleBtnClick}>{item.firstName}</StyledItemList>
            </li>)
        }
        </StyledContainerList>
        {isOpenModal && <ModalCall ModalClose={ModalClose}/>}
        </>
    )

}