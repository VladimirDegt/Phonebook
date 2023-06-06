import { useEffect, useState } from "react";
import { db } from "utils/firebase";
import { ref, get } from "firebase/database";
import { 
    StyledContainerTable, 
    StyledFirstRow, 
    StyledSecondRow,
    StyledThirdRow,
    StyledFourthRow,
    StyledFiveRow,
    StyledFirstRowHead,
    StyledSecondRowHead,
    StyledThirdRowHead,
    StyledFourthRowHead,
    StyledFiveRowHead,
} from "./Contacts.styled";
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

        // Получение ссылки на "contacts" в базе данных
        const contactsRef = ref(db, 'contacts');
        // Получение данных из базы данных
        get(contactsRef)
        .then((snapshot) => {
            if (snapshot.exists()) {
            const data = snapshot.val();
            
            const resultListContacts = [];
            for (let item in data) {
                resultListContacts.push([item, data[item]])
            };

            setListContacts(resultListContacts.filter(([_,{firstName}]) => firstName.toLowerCase().includes(contact.toLowerCase())));
            } else {
            console.log('Данные не найдены');
            }
        })
        .catch((error) => {
            console.error('Ошибка при получении данных из базы данных:', error);
        });   
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
        <StyledContainerTable>
        <thead>
            <tr>
            <StyledFirstRowHead>Назва замовника</StyledFirstRowHead>
            <StyledSecondRowHead>Ім'я представника</StyledSecondRowHead>
            <StyledThirdRowHead>Телефон</StyledThirdRowHead>
            <StyledFourthRowHead>Email</StyledFourthRowHead>
            <StyledFiveRowHead>Примітка</StyledFiveRowHead>
            </tr>
        </thead>
        <tbody>{listContacts.map(([id,{firstName,secondName,email,number,textarea}])=>(
        <tr key={id}>
            <StyledFirstRow onClick={()=>handleBtnClick(firstName)}>{firstName}</StyledFirstRow>
            <StyledSecondRow>{secondName}</StyledSecondRow>
            <StyledThirdRow>{number}</StyledThirdRow>
            <StyledFourthRow>{email}</StyledFourthRow>
            <StyledFiveRow>{textarea}</StyledFiveRow>
        </tr>
            ))}</tbody>

        </StyledContainerTable>
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