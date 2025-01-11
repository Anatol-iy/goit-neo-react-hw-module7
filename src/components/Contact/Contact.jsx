import css from "./Contact.module.css";
import { FaPhoneAlt, FaUser } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps.js";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <div className={css.card}>
      <ul className={css.cardNumber}>
        <li className={css.infoItem}>
          <FaUser />
          <p>{contact.name}</p>
        </li>

        <li className={css.infoItem}>
          <FaPhoneAlt />
          <p>{contact.number}</p>
        </li>
      </ul>
      <button onClick={handleDelete} className={css.deleteButton}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
