import React from "react";
import { connect } from "react-redux";
import * as All from "./functions.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      activity: "",
      dietry: "",
      physical: "",
      medical: ""
    };
  }

  handleChangeCheck = e => {
    let value = e.target.checked ? e.target.value : "";
    this.setState({ [e.target.name]: value });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addItem = value => {
    let newItem = {
      id: this.state.items.length,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      activity: this.state.activity,
      special: `${this.state.dietry} ${this.state.physical} ${
        this.state.medical
      }`
    };

    let newItems = [...this.state.items, newItem];

    this.setState({ items: newItems });
  };

  removeItem = value => {
    let newArray = this.props.items.filter(it => it.id !== value);
    this.setState({ items: newArray });
  };

  render() {
    return (
      <div>
        <All.NameEntry eventHandler={this.handleChange} />
        <All.Activities eventHandler={this.handleChange} />
        <All.SpecialRequirements eventHandler={this.handleChangeCheck} />
        <br />
        <All.SubmitButton clickHandler={this.addItem} />
        <br />
        <br />
        <All.DataTable data={this.props.items} eventHandler={this.removeItem} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { items: state.AddItemReducer };
};

export default connect(mapStateToProps)(App);
