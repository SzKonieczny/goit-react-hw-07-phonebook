import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { Button, FormUs, Input, LabelIn } from './phonebookFrom.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addMyContact, getContacts } from '..//..//redux/spliceContacts';
import { nanoid } from 'nanoid';

const initialValues = {
  name: '',
  number: '',
};

export const PhonebookForm = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);

  const userSubmit = (values, { resetForm }) => {
    if (contacts.find(contact => contact.name === values.name)) {
      return alert(`${values.name} is already is contacts`);
    }
    values.id = nanoid(5);

    dispatch(addMyContact(values));

    resetForm();
  };
  return (
    <>
      <Formik initialValues={initialValues} onSubmit={userSubmit}>
        <FormUs>
          <LabelIn htmlFor="">
            Name
            <Input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </LabelIn>
          <LabelIn htmlFor="">
            Number
            <Input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </LabelIn>
          <Button type="submit">Add contact</Button>
        </FormUs>
      </Formik>
    </>
  );
};

Event.propTypes = {
  onSubmit: PropTypes.func,
};
