import { ADD_ITEM } from "../constants/constants.js";

const addItem = (id, firstName, lastName, activity, special) => {
  return {
    type: ADD_ITEM,
    payload: {
      id: id,
      firstName: firstName,
      lastName: lastName,
      acivity: activity,
      special: special
    }
  };
};

export default addItem;
