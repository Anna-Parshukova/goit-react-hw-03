import { useState, useEffect } from "react";
import css from "./App.module.css";
import ContactList from "../ContactList/ContactList";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";

function App() {
  const [contactList, setContactList] = useState(() => {
    return JSON.parse(localStorage.getItem("savedContact")) || [];
  });

  const [filterName, setFilterName] = useState("");

  useEffect(() => {
    localStorage.setItem("savedContact", JSON.stringify(contactList));
  }, [contactList]);

  const valueByFilter = contactList.filter((contact) =>
    contact.name.toLowerCase().includes(filterName.toLowerCase())
  );

  function addContact(newContact) {
    setContactList((prevStat) => {
      return [...prevStat, newContact];
    });
  }

  function deleteContact(contactId) {
    setContactList((prevState) => {
      return prevState.filter(({ id }) => id !== contactId);
    });
  }

  return (
    <div>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm onAddContact={addContact} />
      <SearchBox value={filterName} onFilter={setFilterName} />
      <ContactList contactList={valueByFilter} onDelete={deleteContact} />
    </div>
  );
}

export default App;