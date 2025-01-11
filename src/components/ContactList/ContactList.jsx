import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contactsOps";
import {
  selectFilteredContacts,
  selectContactsLoading,
  selectContactsError,
} from "../../redux/selectors";
import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import Loading from "../Loading/Loading";
import Error from "../Error/Error";

const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectFilteredContacts); // Используем селектор для фильтрованных контактов
  const isLoading = useSelector(selectContactsLoading);
  const error = useSelector(selectContactsError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  if (isLoading) return <Loading />;
  if (error) return <Error message={error} />;

  return (
    <ul className={css.contactList}>
      {contacts.length === 0 ? (
        <li>No contacts found</li>
      ) : (
        contacts.map((contact) => (
          <Contact key={contact.id} contact={contact} />
        ))
      )}
    </ul>
  );
};

export default ContactList;
