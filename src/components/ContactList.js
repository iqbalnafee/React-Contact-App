import React from 'react'
import ContactCard from './ContactCard';

const ContactList = (props) => {

    const {contacts,deleteHandler} = props;

    const getId = (id) => {
        deleteHandler(id)
    } 

    const renderContacts = contacts.map(

        (contact) => {
            return <ContactCard contact={contact} key={contact.id} getId={getId} />
        }

    );

    return (
        <div className="ui celled list">
            {renderContacts}
        </div>
    )
}

export default ContactList

