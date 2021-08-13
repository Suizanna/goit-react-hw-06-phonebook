import { combineReducers } from 'redux';
import types from './contacts-types';
//общий стейт
// {
//   contacts: {
//     items: [], //для этого reducer
//     filter: '' //для этого reducer
//   }
// }

const initialState = [
  { name: 'Rosie Simpson', number: '459-12-56', id: 'id-1' },
  { name: 'Hermione Kline', number: '443-89-12', id: 'id-2' },
  { name: 'Eden Clements', number: '645-17-79', id: 'id-3' },
  { name: 'Annie Copeland', number: '227-91-26', id: 'id-4' },
];
const itemsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.ADD_CONTACT:
      return [...state, payload];

    case types.DELETE_CONTACT:
      return state.filter(({ id }) => id !== payload); //в свойстве payload - лежит id

    default:
      return state;
  }
};

const filterReducer = (state = '', { type, payload }) => {
  switch (type) {
    case types.CHANGE_FILTER:
      return payload;

    default:
      return state;
  }
};
export default combineReducers({
  itemsReducer,
  filterReducer,
});
