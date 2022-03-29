import React from "react";

export class AddContact extends React.Component {
  state = {
    name: '',
    email: '',
  };
  add = (evt) => {
    evt.preventDefault();
    this.props.addContactHandler(this.state);
    this.setState({name:'', email:''});
    console.log(this.state);
  };

  render() {
    return (
      <div className="ui main">
        <h2> Add Contact </h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label> Name </label>
            <input type='text' name="name" placeholder="Alex" value={this.state.name} required onChange={(evt) => this.setState({ name: evt.target.value })} />
          </div>
          <div className="field">
            <label> Email </label>
            <input type='email' name="email" placeholder="yyyy@gmail.com" required value={this.state.email} onChange={(evt) => this.setState({ email: evt.target.value })} />
          </div>
          <button className="ui button green"> Add </button>
        </form>
      </div>
    );
  };
};