import { useSelector } from "react-redux";
import Contact from "../Contact/Contact.jsx";
import css from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/contactsSlice.js";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.list}>
      {filteredContacts.map((item) => {
        return (
          <li className={css.item} key={item.id}>
            <Contact name={item.name} number={item.number} id={item.id} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
