import { useEffect, useState } from "react";
import { db } from "utils/firebase";
import { ref, get } from "firebase/database";
import { StyledContainerList, StyledItemList } from "./Contacts.styled";
import { ModalCall } from "components/ModalCall/ModalCall";

export function ContactsList({visibleContact}){
    const [contact, setContact] = useState('');
    const [listContacts, setListContacts] = useState([]);
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [id, setId] = useState('');
    const [firstName, setFirstName] = useState('');
    const [secondName, setSecondName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [textarea, setTextarea] = useState('');

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

    function handleBtnClick(id, firstName, secondName, email, number, textarea) {
        setId(id);
        setFirstName(firstName);
        setSecondName(secondName);
        setEmail(email);
        setNumber(number);
        setTextarea(textarea);
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
        listContacts.map(({id, firstName, secondName, email, number, textarea}) => 
            <li key={id}>
                <StyledItemList onClick={()=>handleBtnClick(id, firstName, secondName, email, number, textarea)}>{firstName}</StyledItemList>
            </li>)
        }
        </StyledContainerList>
        {isOpenModal && <ModalCall 
        ModalClose={ModalClose}
        id = {id}
        firstName = {firstName}
        secondName = {secondName}
        email = {email}
        number = {number}
        textarea = {textarea}
        />}
        </>
    )

}