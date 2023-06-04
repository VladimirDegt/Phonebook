import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { 
  StyledBackdrop, 
  StyledModal, 
  StyledTitleModal, 
  StyledFormModal,
  StyledInputModal,
  StyledButtonModal,
} from "./Login.styled";

const auth = getAuth();

export function Login({getAuth}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleInputVisible({target}){
    switch(target.name){
        case 'email':
          setEmail(target.value);
            break;
        case 'password':
          setPassword(target.value);
            break;
        default:
            return;
    }
};

  function handleFormSubmit(e){
    e.preventDefault()

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      if(user) {
        getAuth();
      }
      // ...
    })
    .catch((error) => {
      console.log(error.message);
    });

      e.target.reset();
};

  return (
    <StyledBackdrop>
        <StyledModal >
            <StyledFormModal onSubmit={handleFormSubmit}>
            <StyledTitleModal>Інформація про замовника</StyledTitleModal>
                <StyledInputModal
                    type="email"
                    autoComplete="on"
                    placeholder="Email"
                    name="email"
                    required
                    onChange={handleInputVisible}
                    value={email}
                />
                <StyledInputModal
                    type="password"
                    autoComplete="on"
                    placeholder="Пароль"
                    name="password"
                    onChange={handleInputVisible}
                    value={password}
                />
                <StyledButtonModal type="submit" >Підтвердити</StyledButtonModal>
            </StyledFormModal>
        </StyledModal>
    </StyledBackdrop>    
)
};


