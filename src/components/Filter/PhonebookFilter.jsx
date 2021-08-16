import {  useSelector, useDispatch } from "react-redux";
import contactsActions from '../../redux/contacts/contactsActions.js';
import { nanoid } from "nanoid";
import { getFilter} from "../../redux/contacts/contactsSelectors.";

import s from './PhonebookFilter.module.css';

const Filter = () => {
  const filterInputId = nanoid();
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

   return (
    <>
       <label className={s.label}>
      <p>  Find contacts by name </p>
      <input
        className={s.input}
          id={filterInputId}
          type="text"
          value={value}
          onChange={(e) =>
            dispatch(contactsActions.changeFilter(e.target.value))
          }
          placeholder="Name"
         />
         
      </label>
  </>
);
};
export default Filter;






