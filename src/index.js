import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const activities = ["Science Lab", "Swimming", "Cooking", "Painting"];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      activity: "",
      dietry: "",
      physical: "",
      medical: "",
      items: [
        {
          id: 0,
          firstName: "Rob",
          lastName: "Langston",
          activity: "Science Lab",
          special: "dietry"
        }
      ]
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
    let newArray = this.state.items.filter(it => it.id !== value);
    this.setState({ items: newArray });
  };

  render() {
    return (
      <div>
        <NameEntry eventHandler={this.handleChange} />
        <Activities eventHandler={this.handleChange} />
        <SpecialRequirements eventHandler={this.handleChangeCheck} />
        <br />
        <SubmitButton clickHandler={this.addItem} />
        <br />
        <br />
        <DataTable data={this.state.items} eventHandler={this.removeItem} />
      </div>
    );
  }
}

const NameEntry = props => {
  return (
    <p>
      First Name:{" "}
      <input
        type="text"
        id="firstName"
        name="firstName"
        onChange={props.eventHandler}
      />{" "}
      Last Name:{" "}
      <input
        type="text"
        id="lastName"
        name="lastName"
        onChange={props.eventHandler}
      />
    </p>
  );
};

const Activities = props => {
  return (
    <p>
      Select Activity:{" "}
      <select name="activity" onChange={props.eventHandler}>
        {activities.map(act => (
          <option value={act}>{act}</option>
        ))}
      </select>
    </p>
  );
};

const SpecialRequirements = props => {
  return (
    <div>
      Select All That Apply:
      <br />
      <input
        type="checkbox"
        name="dietry"
        value="dietry"
        onChange={props.eventHandler}
      />
      <label>a) Dietry Requirements</label>
      <br />
      <input
        type="checkbox"
        name="physical"
        value="physical"
        onChange={props.eventHandler}
      />
      <label>b) Physical Disabilities</label>
      <br />
      <input
        type="checkbox"
        name="medical"
        value="medical"
        onChange={props.eventHandler}
      />
      <label>c) Medical Needs</label>
      <br />
    </div>
  );
};

const SubmitButton = props => {
  return <button onClick={props.clickHandler}>Submit</button>;
};

const DataTable = props => {
  return (
    <table>
      <DataTableHeader />
      <DataTableDetails data={props.data} eventHandler={props.eventHandler} />
    </table>
  );
};

const DataTableDetails = props => {
  return props.data.map(it => (
    <tr>
      <td>
        <button
          onClick={() => {
            props.eventHandler(it.id);
          }}
        >
          Remove
        </button>
      </td>
      <td>{it.firstName}</td>
      <td>{it.lastName}</td>
      <td>{it.activity}</td>
      <td>{it.special}</td>
    </tr>
  ));
};

const DataTableHeader = props => {
  return (
    <tr>
      <td>Remove</td>
      <td>First Name</td>
      <td>Last Name</td>
      <td>Activity</td>
      <td>Restrictions</td>
    </tr>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
