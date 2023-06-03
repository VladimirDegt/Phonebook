import { useState } from "react";
import { StyledContainer } from "./App.styled";
import Searchbar from "./Searchbar";
import { ContactsList } from "./Contacts/Contacts";

export function App(){
  const [visibleContact, setVisibleContact] = useState('');

  function getContact(name){
    setVisibleContact(name)
  };
  
  return (
    <>
    {/* <Global styles={global}/> */}
    <StyledContainer>
      <Searchbar getContact={getContact}/>
      <ContactsList visibleContact={visibleContact}/>
    </StyledContainer>
    </>
  );
};
