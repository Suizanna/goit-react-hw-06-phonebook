import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactsActions = {
  addContact: createAction('contacts/add', (name, number) => ({
    payload: {
      id: nanoid(),
      name,
      number,
    },
  })),

  deleteContact: createAction('contacts/delete'),
  changeFilter: createAction('contacts/changeFilter'),
};

export default contactsActions;
