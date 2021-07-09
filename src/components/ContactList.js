import React from 'react'

const ContactList = (props) => {

    const {contacts} = props;

    const renderContacts = contacts.map(

        (contact) => {
            return (

                <div className="item">
                    <div className="content">
                        <div className="header">{contact.name}</div>
                        <div>{contact.email}</div>
                        
                    </div>
                    <i style={{float:"right"}} className="trash alternate outline icon"></i>
                </div>

            );
        }

    );

    return (
        <div className="ui celled list">
            {renderContacts}
        </div>
    )
}

export default ContactList

