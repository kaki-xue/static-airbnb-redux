export default function(state, action) {

  //combine state (from redux state tree index.jsx one file where set state(flats) to reducer (flatsReducer))
  //and action (from actions/ indx.js one file)
  // what they do here is to use the action to change previous state
  if(state === undefined) {
    return {}
  }

  // if(action.type === 'SET_FLATS') {
  //   return action.payload;
  // } else {
  //   return state;
  // }

  // or

  // switch(action.type) {
  //   case 'SELECT_FLAT':
  //     return action.payload;
  //   default:
  //     return state;
  // }

    if(action.type === 'SELECT_FLAT') {
    return action.payload;
  } else {
    return state;
  }
}
