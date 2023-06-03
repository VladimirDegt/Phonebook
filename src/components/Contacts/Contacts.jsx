import { useEffect, useState } from "react";
import { db } from "utils/firebase";
import { ref, get } from "firebase/database";

export function ContactsList({visibleContact}){
    const [contact, setContact] = useState('');
    const [listContacts, setListContacts] = useState([]);
    
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

    return(
        <ul>
        {contact &&
        listContacts.map((item) => <li key={item.id}>{item.firstName}</li>)
        }
        </ul>
    )

}