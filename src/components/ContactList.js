import { ContactCard } from "./ContactCard";

export const ContactList = ({ contacts }) => {
  const renderContactList = contacts.map((contact) => {
    return (<ContactCard contact={contact}  key={contact.email}/>);
  });

  return (
    <div className="ui celled list">
      {renderContactList}
    </div>
  );
};
