import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import itemsReducer from './contacts/contacts-reducer';
import filterReducer from './contacts/contacts-reducer';
// import contactsReducer from './contacts/contacts-reducer';
//место стейта  setState / изменение его

const rootReducer = combineReducers({
  // contacts: contactsReducer,
  items: itemsReducer,
  filter: filterReducer,
});

const store = createStore(rootReducer, composeWithDevTools());
export default store;
