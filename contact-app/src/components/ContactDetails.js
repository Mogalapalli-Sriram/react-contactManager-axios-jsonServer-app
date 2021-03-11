import React from 'react';
import {Link} from 'react-router-dom';

function ContactDetails(props) {
const {Name,Email} = props.location.state.contact;
console.log(props);
return (
    
  <div className = "main">
          <div className = "content" >
          <div className = "header">{Name}</div>
          <div className = "description">{Email}</div>
          </div>
      <Link to = "/">
      <button type = "button" className = "btn btn-primary btn-md"> Go back to ContactLists</button>
      </Link>
  
  </div>
  
    );

}

export default ContactDetails;
