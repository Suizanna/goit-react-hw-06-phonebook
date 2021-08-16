import { useSelector, useDispatch } from "react-redux";
import contactsActions from '../../redux/contacts/contactsActions.js';
import { getFilteredContacts } from "../../redux/contacts/contactsSelectors.";

import { ReactComponent as DeleteIcon } from '../../img/delete.svg';
import s from './PhoneList.module.css';


const PhoneBookList = () => {
   const contacts = useSelector(getFilteredContacts);

  const dispatch = useDispatch();
  
  return (
    <ul className={s.list}>
      {contacts.map(({ name, number, id }) => {
        return (
    <li key={id} className={s.item}>
       <p className={s.info}>
            <b>{name}</b>
            <em>{number}</em>
          </p>
      <button className={s.btn_circle}
        type="button"     
         onClick={() => dispatch(contactsActions.deleteContact(id))}>
              
        <DeleteIcon pointerEvents="none" width="26" height="26" />
      </button>
    </li>
        );
        
      })}
    </ul>
  );
};

export default PhoneBookList;





