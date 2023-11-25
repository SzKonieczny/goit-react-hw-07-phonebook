import { ContactIt, Item, ListBox } from './contactList.styled';
import { IconButton } from '..//IconBtn/IconBtn';
import { MdDeleteOutline } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { deleteMyContact, getContacts, getFilter } from '../../redux';

// import { deleteMyContact, getContacts } from 'redux/sliceContacts';
// import { getFilter } from 'redux/sliceFilter';

export const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const deleteContact = idContact => {
    dispatch(deleteMyContact(idContact));
  };

  const findContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = findContacts();

  return (
    <ListBox>
      <ul>
        {filteredContacts.map(({ id, name, number }) => {
          return (
            <Item key={id}>
              <ContactIt>
                {name}: {number}
              </ContactIt>
              <IconButton
                type="button"
                onClick={() => deleteContact(id)}
                aria-label="Delete contact"
              >
                <MdDeleteOutline size="20px" />
              </IconButton>
            </Item>
          );
        })}
      </ul>
    </ListBox>
  );
};
