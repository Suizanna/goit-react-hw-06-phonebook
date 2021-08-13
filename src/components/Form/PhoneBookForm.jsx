import PropTypes from 'prop-types';
// import s from './PhoneForm.module.css';
import s from './ContactList.module.css';
// import { toast } from 'react-toastify';
// import { /*connect,*/ useDispatch } from "react-redux";

import { connect } from "react-redux";
import { addContact } from '../../redux/contacts/contacts-actions';
import { useState } from 'react';

const PhoneBookForm = ({ onSubmit}) => {
  //  const [contacts, setContacts] = useState(() => {
  //   return JSON.parse(localStorage.getItem('contacts')) ?? [];
  // });
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  
  // const dispatch = useDispatch();
  
  const handleChange = (e) => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case "name":
        setName(value);
        break;

      case "number":
        setNumber(value);
        break;

      default:
        return;
    }
  };
    const  handleSubmit = (e) => {
      e.preventDefault();
  //  if (contacts.some(el => el.name === name)) {
  //     toast(`🤔 ${name} is already in contacts.`);
  //     return;
  //   }
  //   if (contacts.some(el => el.number === number)) {
  //     toast(`🤔 ${number} is already in contacts.`);
  //     return;
  //   }
  //   if (!/\d{3}[-]\d{2}[-]\d{2}/g.test(number)) {
  //     toast.error('Enter the correct number phone!');
  //     return;
  //   } else {
  //     // dispatch(addContact(name, number));
  //         dispatch(addContact(name, number));
  //   }
  
    onSubmit({ name, number });
  
    setName(""); //resetInput 
    setNumber("");
  };


  return (
    <form className={s.form} onSubmit={ handleSubmit} action="">
      <label className={s.label} htmlFor="">
        <p>Name</p>
        <input
          className={s.input}
          // onInput={onSetUserInfo}
            onChange={handleChange}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          placeholder="Ivan Ivanov"
        />
      </label>
      <label className={s.label} htmlFor="">
        <p>Number</p>
        <input
          className={s.input}
          // onInput={onSetUserInfo}
             onChange={handleChange}
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          placeholder="111-11-11"
        />
      </label>
     <button className={s.btn} type="submit">
        Add contact
      </button>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit: ({ name, number }) =>
    dispatch(addContact(name, number)),
});

PhoneBookForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(PhoneBookForm);

// PhoneBookForm.propTypes = {
//   onAddContact: PropTypes.func.isRequired
// };

// export default PhoneBookForm;



