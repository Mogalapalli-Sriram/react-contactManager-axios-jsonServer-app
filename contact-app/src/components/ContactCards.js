import React from 'react';
import {Link} from 'react-router-dom';

function ContactCards(props) {

const {id,Name,Email} = props.contacts;
  


return (
    <div className = "item">
    <div className= "content">
      <Link to = { {pathname : `/contact/${id}` , state: { contact : props.contacts } } }>
      <div className= "header">{Name} </div>
      <div>{Email}</div>
      </Link>
    </div>
    <i className= "trash alternate outline icon"
       style = { {color:"red" , marginTop:"7px"}}
       onClick = {() => props.clickHandler(id)}
       ></i>
      <Link to = { {pathname : `/edit` , state: { contact : props.contacts } } }>
    <i className= "edit alternate outline icon"
       style = { {color:"blue" , marginTop:"7px",marginLeft:"20px"}}
       ></i>
     </Link>  
   </div>
  );

}

export default ContactCards;