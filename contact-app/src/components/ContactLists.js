import React from 'react';
import ContactCards from './ContactCards';
import {Link} from 'react-router-dom';

function ContactLists(props) {



const renderContactsList = props.contacts.map(function(contact) {

 function deleteContactHandler(id) {
     props.getContactId(id);
 }

        return(  
        <ContactCards 
        contacts = {contact} 
        clickHandler = {deleteContactHandler} 
        />  
        );
    });

return (
<div className = "main">
    <h2> ContactLists</h2>
    <Link to = "/add">
    <button className = "btn btn-primary btn-md" type = "button">Add Contacts</button>
    </Link>
    <div> 
{renderContactsList}
</div>
</div>
);

}
export default ContactLists;