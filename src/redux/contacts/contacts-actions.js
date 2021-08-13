// сохранения и удаления контакта, а также обновления фильтра.

import types from './contacts-types';
import shortid from 'shortid';

export const addContact = (name, number) => ({
  type: types.ADD_CONTACT,
  payload: { id: shortid.generate(), name, number },
});

export const deleteContact = id => ({
  type: types.DELETE_CONTACT,
  payload: id,
});
export const changeFilter = value => ({
  type: types.CHANGE_FILTER,
  payload: value,
});

// export default const contactsActions = { addContact, deleteContact, changeFilter };

// import {
//   ADD_CONTACT,
//   DELETE_CONTACT,
//   FILTER_CONTACT,
//   //   CHANGE_FILTER,
// } from './contacts-types';
