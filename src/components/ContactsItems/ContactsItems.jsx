import { IconButton } from 'components/IconBtn/IconBtn';
import { SpinerDelete } from 'components/Spiner/Spiner';
import { ContactIt, Item } from './contactsItems.styled';
import { MdDeleteOutline } from 'react-icons/md';
import { useDeleteContactMutation } from 'redux/sliceContacts';

export const ContactsItems = ({ id, name, phone }) => {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  return (
    <Item>
      <ContactIt>
        {name}: {phone}
      </ContactIt>
      <IconButton
        type="button"
        onClick={() => deleteContact(id)}
        aria-label="Delete contact"
      >
        {isDeleting ? <SpinerDelete /> : <MdDeleteOutline size="20px" />}
      </IconButton>
    </Item>
  );
};
