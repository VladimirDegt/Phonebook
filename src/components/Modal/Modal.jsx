import { ref, push, set } from 'firebase/database';
import { db } from 'utils/firebase';
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import {
  StyledBackdrop,
  StyledModal,
  StyledButtonClose,
  StyledTitleModal,
  StyledFormModal,
  StyledInputModal,
  StyledContainerInput,
  StyledSvgInput,
  StyledTextArea,
  StyledButtonModal,
} from './Modal.styled';
import IconClose from 'utils/search-svg';
import { Notify } from 'notiflix';

export function Modal({ ModalClose }) {
  const [firstName, setFirstName] = useState('');
  const [secondName, setSecondName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [textarea, setTextarea] = useState('');

  useEffect(() => {
    function handleEsc(e) {
      if (e.code === 'Escape') {
        ModalClose();
      }
    }
    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [ModalClose]);

  function handleInputVisible({ target }) {
    switch (target.name) {
      case 'firstName':
        setFirstName(target.value);
        break;
      case 'secondName':
        setSecondName(target.value);
        break;
      case 'email':
        setEmail(target.value.trim());
        break;
      case 'number':
        setNumber(target.value.trim());
        break;
      case 'textarea':
        setTextarea(target.value);
        break;
      default:
        return;
    }
  }

  function handleFormSubmit(e) {
    e.preventDefault();

    if (number.length !== 10) {
      Notify.failure('Невірний формат номеру!');
      return;
    }

    const contact = {
      id: nanoid(),
      firstName,
      secondName,
      email,
      number,
      textarea,
    };

    const contactRef = push(ref(db, 'contacts'));
    set(contactRef, contact)
      .then(() => {
        Notify.success('Контакт додано', {
          position: 'center-top',
          distance: '100px',
        });
        setFirstName('');
        setSecondName('');
        setEmail('');
        setNumber('');
        setTextarea('');
        ModalClose();
      })
      .catch(error => {
        Notify.failure('Пробачьте, щось пішло не так!', {
          position: 'center-top',
          distance: '100px',
        });
        e.target.reset();
        console.error('Ошибка при добавлении в базу данных: ', error);
      });
  }

  function handlerModalClose() {
    ModalClose();
  }

  return (
    <StyledBackdrop>
      <StyledModal >
        <StyledButtonClose type="button" onClick={handlerModalClose}>
          <IconClose />
        </StyledButtonClose>
        <StyledFormModal onSubmit={handleFormSubmit} >
          <StyledTitleModal>Інформація про замовника</StyledTitleModal>
          <StyledInputModal
            type="text"
            autoComplete="on"
            placeholder="Назва підприємства"
            name="firstName"
            required
            onChange={handleInputVisible}
            value={firstName}
          />
          <StyledInputModal
            type="text"
            autoComplete="on"
            placeholder="Ім'я представника"
            name="secondName"
            onChange={handleInputVisible}
            value={secondName}
          />
          <StyledInputModal
            type="email"
            autoComplete="on"
            placeholder="Email"
            name="email"
            required
            onChange={handleInputVisible}
            value={email}
          />
          <StyledContainerInput>
            <StyledInputModal
              type="tel"
              autoComplete="off"
              placeholder="0501112223"
              name="number"
              required
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер повинен починатися з 050, 096, інше та ще 7 цифр"
              onChange={handleInputVisible}
              value={number}
            />
            <StyledSvgInput>+38</StyledSvgInput>
          </StyledContainerInput>
          <StyledTextArea
            rows="4"
            placeholder="Примітка"
            name="textarea"
            onChange={handleInputVisible}
            value={textarea}
          />
          <StyledButtonModal type="submit">Підтвердити</StyledButtonModal>
        </StyledFormModal>
      </StyledModal>
    </StyledBackdrop>
  );
}
