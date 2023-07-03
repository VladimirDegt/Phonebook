import { ChakraProvider, CSSReset  } from "@chakra-ui/react";
import { useState } from "react";
import { StyledContainer } from "./App.styled";
import Searchbar from "./Searchbar";
import { ContactsList } from "./Contacts/Contacts";
import { FooterApp } from "./Footer/Footer";
import { Login } from "./Login/Login";
import { lightTheme } from "./ThemeSwitcher";

export function App(){
  const [visibleContact, setVisibleContact] = useState('');
  const [isAuth, setIsAuth] = useState(false);
  const [closeAuth, setCloseAuth] = useState(true);

  function getAuth(){
    setIsAuth(true);
    setCloseAuth(false);
  }

  function getContact(name){
    setVisibleContact(name)
  };
  
  return (
    <ChakraProvider theme={lightTheme}>
    <CSSReset />
      {isAuth && 
      <>
        <StyledContainer>
          <Searchbar getContact={getContact}/>
          <ContactsList visibleContact={visibleContact}/>
        </StyledContainer>
        <FooterApp/>
      </> 
      }
      {closeAuth && <Login getAuth={getAuth}/>}
    </ChakraProvider>
  );
};
