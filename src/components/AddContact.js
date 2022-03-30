import React from "react";
import { Link } from "react-router-dom";

export class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
  };

  add = (e) => {
    e.preventDefault();
    this.props.addContactHandler(this.state);
    this.setState({ name: "", email: "" });
  };
  render() {
    return (
      <div className="ui main">
        <h2> Add Contact </h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label> Name </label>
            <input
              type="text"
              name="name"
              placeholder="Alex"
              value={this.state.name}
              required
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="field">
            <label> Email </label>
            <input
              type="email"
              name="email"
              placeholder="aaa@gmail.com"
              value={this.state.email}
              required
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <button className="ui button green"> Add </button>
          <Link to='/'>
            <button className="ui button grey"> My List </button>
          </Link>
        </form>
      </div>
    );
  }
};