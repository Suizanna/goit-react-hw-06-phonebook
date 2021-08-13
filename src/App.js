import Container from './components/Container/Container';
import PhoneBookForm from './components/Form/PhoneBookForm';
import PhoneBookList from './components/List/PhoneBookList';
import PhonebookFilter from './components/Filter/PhonebookFilter';
import filterContacts from './helpers/filterContacts';
// import shortId from 'shortid';
import { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) ?? [];
  });
  // const [name, setName] = useState('');
  // const [number, setNumber] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleChangeInput = e => {
    const { name, value } = e.target;
    switch (name) {
      //     case 'name':
      //       setName(value);
      //       break;
      //     case 'number':
      //       setNumber(value);
      //       break;
      case 'filter':
        setFilter(value);
        break;

      default:
        return;
    }
  };

  // const handleAddContact = e => {
  //   e.preventDefault();

  //   if (contacts.some(el => el.name === name)) {
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
  //   }
  //   const contact = {
  //     name,
  //     number,
  //     id: shortId.generate(),
  //   };
  //   setContacts(prev => [...prev, contact], setName(''), setNumber('')); //esetInput
  // };

  // const handleDeleteContact = e => {
  //   setContacts(contacts.filter(el => el.id !== e.target.id));
  // };
  //не нужно раскоммент
  // const handleChangeFilter = e => {
  //   setFilter(e.target.value);
  // };

  const contactsArray = filterContacts(contacts, filter);
  return (
    <Container>
      <h1>Phonebook</h1>
      <PhoneBookForm
        contacts={contactsArray}
        // name={name}
        // number={number}
        // onAddContact={handleAddContact}
        // onSetUserInfo={handleChangeInput}
      />
      <h2>Contacts</h2>
      {contacts.length > 1 && (
        <PhonebookFilter filterValue={filter} onSetFilter={handleChangeInput} />
      )}
      {contacts.length > 0 ? (
        <PhoneBookList
          // onDeleteContact={handleDeleteContact}
          contacts={contactsArray}
        />
      ) : (
        <p>Your phonebook is empty. Please add contact.</p>
      )}
      <ToastContainer autoClose={3700} />
    </Container>
  );
}
export default App;
