import { combineReducers } from "redux";
import { ADD_ITEM } from "../constants/constants.js";

const INITIAL_DATA = [
  {
    id: 0,
    firstName: "Rob",
    lastName: "Langston",
    activity: "Science Lab",
    special: "dietry"
  }
];

const AddItemReducer = (state = INITIAL_DATA, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return state.concat([{ ...action.payload }]);
    default:
      return state;
  }
};

export default combineReducers({
  AddItemReducer
});
