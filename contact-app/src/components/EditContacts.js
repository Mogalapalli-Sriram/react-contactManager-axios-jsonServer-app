import React from "react";

class EditContact extends React.Component {
  constructor(props) {
    super(props);
    const { id, Name, Email } = props.location.state.contact;
    this.state = {
      id,
      Name,
      Email,
    };
  }

  update = (e) => {
    if (this.state.Name === "" || this.state.Email === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    this.props.updateContactHandler(this.state);
    this.props.history.push("/");
    
  };
  render() {
    return (
      <div>
        <h2>Edit Contact</h2>
        <form >
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="Name"
              value={this.state.Name}
              onChange={(e) => this.setState({ Name: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="text"
              className="form-control"
              name="email"
              placeholder="Email"
              value={this.state.Email}
              onChange={(e) => this.setState({ Email: e.target.value })}
            />
          </div>
          <button className="btn btn-primary btn-md"onClick={this.update} >Update</button>
        </form>
      </div>
    );
  }
}

export default EditContact;

