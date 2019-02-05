import React from "react";
import { connect } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers/reducers.js";

const activities = ["Science Lab", "Swimming", "Cooking", "Painting"];

export const NameEntry = props => {
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

export const Activities = props => {
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

export const SpecialRequirements = props => {
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

export const SubmitButton = props => {
  return <button onClick={props.clickHandler}>Submit</button>;
};

export const DataTable = props => {
  return (
    <table>
      <DataTableHeader />
      <DataTableDetails data={props.data} eventHandler={props.eventHandler} />
    </table>
  );
};

export const DataTableDetails = props => {
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

export const DataTableHeader = props => {
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
