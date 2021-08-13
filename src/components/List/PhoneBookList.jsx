import { connect } from "react-redux";
// import contactsActions from "../../redux/contacts/contacts-actions";
import { deleteContact } from "../../redux/contacts/contacts-actions";
import { ReactComponent as DeleteIcon } from '../../img/delete.svg';
import s from './PhoneList.module.css';

  
const PhoneBookList = ({ contacts, onDeleteContact }) => {
  
  return (
    <ul className={s.list}>
      {contacts.map(({ name, number, id }) => {
        return (
    <li className={s.item}>
       <p className={s.info}>
            <b>{name}</b>
            <em>{number}</em>
          </p>
      <button className={s.btn_circle}
        type="button"
        onClick={() => onDeleteContact(id)} id={id}>
           {/* Delete */}
        <DeleteIcon pointerEvents="none" width="26" height="26" />
      </button>
    </li>
        );
        
      })}
    </ul>
  );
};

//selector
const filterContacts = (allContacts, filter) => {
  return allContacts.filter(obj => 
   obj.name.toLowerCase().includes(filter.toLowerCase().trim()),
  );
}

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: filterContacts(items, filter),
});


const mapDispatchToProps = (dispatch) => ({
  onDeleteContact: (id) => dispatch(deleteContact(id)),

});

export default connect(mapStateToProps, mapDispatchToProps)(PhoneBookList);



// export default PhoneBookList;

// const filterContacts = (contacts, filter) =>
//   contacts.filter(
//     (contact) =>
//       contact.name.toLowerCase().includes(filter.toLowerCase()) ||
//       contact.number.includes(filter)
//   );





