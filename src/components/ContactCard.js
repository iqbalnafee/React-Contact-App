import React from 'react'
import userLogo from '../images/user.png';

const ContactCard = ({contact,getId}) => {
    return (
        <div className="item">
            <img className="ui avatar image" src={userLogo} alt="" />
            <div className="content">
                
                <div className="header">{contact.name}</div>
                <div>{contact.email}</div>
                
            </div>
            <i onClick={() => getId(contact.id)}  style={{float:"right",color:"red",marginBottom:"7px",cursor:"pointer"}} className="trash alternate outline icon"></i>
        </div>
    )
}

export default ContactCard
