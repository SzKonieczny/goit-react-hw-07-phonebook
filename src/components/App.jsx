import React from 'react';
import { Toaster } from 'react-hot-toast';

import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { PhonebookForm } from './PhonebookFrom/PhonebookFrom';

import {
  MainContainer,
  PhonebookContainer,
  Title,
  TitleCont,
} from './app.styled';

export const App = () => {
  return (
    <MainContainer>
      <Title>PhoneBook</Title>

      <PhonebookContainer>
        <PhonebookForm />
      </PhonebookContainer>
      <TitleCont>Contacts</TitleCont>
      <Filter />
      <ContactList />
      <Toaster />
    </MainContainer>
  );
};
