import { useEffect, useState } from "react";
import { ref, get } from "firebase/database";
import { db } from "utils/firebase";
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
    StyledChangeBtn,
    StyledLink,
} from "./Contacts.styled";
import { ModalCall } from "components/ModalCall/ModalCall";
import { ModalChange } from "components/ModalChange/ModalChange";
import { ModalDeleteContact } from "components/ModalDeleteContact/ModalDeleteContact";
import IconWrite from "utils/change-svg";
import IconDelete from "utils/delete-svg";

export function ContactsList({visibleContact}){
    const [contact, setContact] = useState('');
    const [listContacts, setListContacts] = useState([]);
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [isOpenChangeModal, setIsOpenChangeModal] = useState(false);
    const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
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

    function handleBtnChangeClick(id, firstName, secondName, email, number, textarea) {
        setId(id);
        setFirstName(firstName);
        setSecondName(secondName);
        setEmail(email);
        setNumber(number);
        setTextarea(textarea);
        handleChangeModalOpen();
    };

    function handleBtnDeleteClick(id) {
        setId(id);
        setIsOpenDeleteModal(true);
    }

    function handleChangeModalOpen(){
        setIsOpenChangeModal(true)
    };
      
    function modalClose(){
        setIsOpenModal(false)
    };

    function modalChangeClose(){
        setIsOpenChangeModal(false)
    };

    function modalDeleteClose(){
        setIsOpenDeleteModal(false)
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
            <StyledFirstRow onClick={()=>handleBtnClick(id,firstName,secondName,email,number,textarea)}>{firstName}</StyledFirstRow>
            <StyledSecondRow>{secondName}</StyledSecondRow>
            <StyledThirdRow>
                <StyledLink href={`viber://chat?number=+38${number}`}>
                    {number}
                </StyledLink>
            </StyledThirdRow>
            <StyledFourthRow>
                <StyledLink href={`mailto:${email}`} target="_blank">
                    {email}
                </StyledLink>
            </StyledFourthRow>
            <StyledFiveRow>{textarea}</StyledFiveRow>
            <StyledChangeBtn type="button" onClick={()=>handleBtnChangeClick(id,firstName,secondName,email,number,textarea)}>
                <IconWrite/>
            </StyledChangeBtn>
            <StyledChangeBtn type="button" onClick={()=>handleBtnDeleteClick(id)}>
                <IconDelete/>
            </StyledChangeBtn>
        </tr>
            ))}</tbody>
        </StyledContainerTable>

        {isOpenModal && <ModalCall 
        ModalClose={modalClose}
        id = {id}
        firstName = {firstName}
        secondName = {secondName}
        email = {email}
        number = {number}
        textarea = {textarea}
        />}

        {isOpenChangeModal && <ModalChange
        modalChangeClose={modalChangeClose}
        id = {id}
        firstName = {firstName}
        secondName = {secondName}
        email = {email}
        number = {number}
        textarea = {textarea}
        />}

        {isOpenDeleteModal && <ModalDeleteContact 
        id={id}
        modalDeleteClose= {modalDeleteClose}/>}
    </>
    )
}