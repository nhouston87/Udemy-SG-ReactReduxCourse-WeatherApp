import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      if(action.error) {
        alert("City Does not exist");
        break;
      }
      // return state.concat([action.payload.data]);
      return [ action.payload.data, ...state ]; // ES6 syntax similar to the above statement
  }
  return state;
}
