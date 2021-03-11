import React, { useState } from 'react';

function AddContacts(props) {
  const [content, setContent] = useState({
    Name: '',
    Email: '',
  });

  function variation(event) {
    const { name, value } = event.target;
    console.log(name);
    setContent((prevValue) => {
      if (name === 'contactName') {
        return {
          Name: value,
          Email: prevValue.Email,
        };
      }
      if (name === 'email') {
        return {
          Name: prevValue.Name,
          Email: value,
        };
      }
    });
    console.log(content);
  }

  function handleClick() {
    if (content.Name === '' || content.Email === '') {
      alert('all fields are mandatory');
      return;
    }
    props.addContactHandler(content);
    console.log(content);
    setContent({
      Name: '',
      Email: '',
    });
    props.history.push('/');
  }

  return (
    <div className="ui main">
      <h2>Add Contacts</h2>
      <form>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            name="contactName"
            placeholder="name"
            value={content.Name}
            onChange={variation}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="email"
            value={content.Email}
            onChange={variation}
          />
        </div>
        <button className="btn btn-primary btn-md" type="button" onClick={handleClick}>Add</button>
      </form>

    </div>
  );
}

export default AddContacts;
