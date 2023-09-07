// import { useEffect } from 'react';
import { ContactForm } from '../ContactForm';
import { Filter } from '../Filter';
import { ContactList } from '../ContactList';
import { Wrapper } from './App.styled';
// import { useSelector } from 'react-redux';
export const App = () => {
  // const [contacts, setContacts] = useState(() => getContactsFromLocalStorage() ?? []);
  // const filter = useSelector(state => state.filter);
  // const contacts = useSelector(state => state.contacts);

  // useEffect(() => {
  //   try {
  //     const itemToSet = JSON.stringify(contacts);
  //     localStorage.setItem('contacts', itemToSet);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }, [contacts]);

  // function getContactsFromLocalStorage() {
  //   try {
  //     const recievedContacts = JSON.parse(localStorage.getItem('contacts'));
  //     if (recievedContacts) {
  //       return recievedContacts;
  //     }
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }

  return (
    <Wrapper>
      <h1>Phonebook</h1>
      <ContactForm></ContactForm>
      <h2>Contacts</h2>
      <Filter/>
      <ContactList
      ></ContactList>
    </Wrapper>
  );
};
