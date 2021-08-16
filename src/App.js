import Container from './components/Container/Container';
import PhoneBookForm from './components/Form/PhoneBookForm';
import PhoneBookList from './components/List/PhoneBookList';
import PhonebookFilter from './components/Filter/PhonebookFilter';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
import { getContacts } from './redux/contacts/contactsSelectors.';

function App() {
  const contacts = useSelector(getContacts);

  return (
    <Container>
      <h1>Phonebook</h1>

      <PhoneBookForm />

      <h2>Contacts</h2>
      {contacts.length > 1 && <PhonebookFilter />}

      {contacts.length > 0 ? (
        <PhoneBookList />
      ) : (
        <p>Your phonebook is empty. Please add contact.</p>
      )}
      <ToastContainer autoClose={3700} />
    </Container>
  );
}
export default App;
