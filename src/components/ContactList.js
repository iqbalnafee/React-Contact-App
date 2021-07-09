import React from 'react'
import ContactCard from './ContactCard';

const ContactList = (props) => {

    const {contacts} = props;

    const renderContacts = contacts.map(

        (contact) => {
            return <ContactCard contact={contact} key={contact.id} />
        }

    );

    return (
        <div className="ui celled list">
            {renderContacts}
        </div>
    )
}

export default ContactList

