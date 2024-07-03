import icon from "../../icons/icons.json";
import css from "./Contact.module.css";
import { deleteContact } from "../../redux/contactsOps";
import { useDispatch } from "react-redux";

const Contact = ({ name, number, id }) => {
  const { user, phone } = icon;
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <div className={css.cardWrapper}>
      <div className={css.infoWrapper}>
        <div className={css.info}>
          <img src={user} alt="User" width="24" height="24px" />
          <p className={css.text}>{name}</p>
        </div>
        <div className={css.info}>
          <img src={phone} alt="Phone" width="24" height="24px" />
          <p className={css.text}>{number}</p>
        </div>
      </div>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};
export default Contact;
