import { useSelector } from 'react-redux';

import { Spiner } from 'components/Spiner/Spiner';
import { ListBox } from './contactList.styled';
import { getFilter } from 'redux/sliceFilter';
import { ContactsItems } from 'components/ContactsItems/ContactsItems';
import { useGetContactsQuery } from '..//..//redux/spliceContacts';

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
