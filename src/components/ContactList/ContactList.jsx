import { List } from './ContactList.styled';
import { Contact } from '../Contact';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const getFoundContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  const filteredContacts = getFoundContacts();

 return (
  <List>
    {filteredContacts.map(({ name, number, id }) => {
      return (
        <Contact
          key={id}
          id={id}
          name={name}
          number={number}
        ></Contact>
      );
    })}
  </List>
 )


}

  


// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.exact({
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//       id: PropTypes.string.isRequired,
//     })
//   ).isRequired,
//   handleDeleteBtnClick: PropTypes.func.isRequired,
// };
