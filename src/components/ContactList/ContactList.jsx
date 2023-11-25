import { Spiner } from 'components/Spiner/Spiner';
import { ListBox } from './contactList.styled';
import { useSelector } from 'react-redux';
import { useGetContactsQuery } from 'redux/sliceContacts';
import { getFilter } from 'redux/sliceFilter';
import { ContactsItems } from 'components/ContactsItems/ContactsItems';

export const ContactList = () => {
  const { data: contacts, isFetching } = useGetContactsQuery();

  const filter = useSelector(getFilter);

  const findContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    if (contacts) {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
      );
    }
  };

  const filteredContacts = findContacts();

  return (
    <ListBox>
      {isFetching && <Spiner />}
      <ul>
        {contacts &&
          filteredContacts.map(contact => (
            <ContactsItems key={contact.id} {...contact} />
          ))}
      </ul>
    </ListBox>
  );
};
