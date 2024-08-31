import css from "./Contact.module.css";
import { MdPhone } from "react-icons/md";
import { IoPerson } from "react-icons/io5";

export default function Contact({ contact: { name, number, id }, onDelete }) {
  return (
    <div className={css.contactBox}>
      <div className={css.iconsBox}>
        <IoPerson style={{ width: 20, height: 20 }} />
        <MdPhone style={{ width: 20, height: 20 }} />
      </div>
      <div className={css.contactData}>
        <p>{name}</p>
        <p>{number}</p>
      </div>
      <button className={css.btnDelete} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}