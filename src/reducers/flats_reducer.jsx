export default function(state, action) {
  //combine state (from redux state tree index.jsx one file where set state(flats) to reducer (flatsReducer))
  //and action (from actions/ indx.js one file)
  // what they do here is to use the action to change previous state
  if(state === undefined) {
    return []
  }

  // if(action.type === 'SET_FLATS') {
  //   return action.payload;
  // } else {
  //   return state;
  // }

  // or

  switch(action.type) {

    case 'SET_FLATS':
      return action.payload;
    default:
      return state;
  }
}


// or
// const flatsReducer =(state, action ) => {
//    if(state ==== underfined) {
//     return []
// }

// export default flatsReducer;
