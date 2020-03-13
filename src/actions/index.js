import flats from '../flats'

export function setFlats() {
//todo api call, for now simulate a db
// this is the backend of frontend , where data is comming from
  return {
    type: 'SET_FLATS',
    payload: flats
  }
 }

 export function selectFlat(flat) {
//todo api call, for now simulate a db
// this is the backend of frontend , where data is comming from

  return {
    type: 'SELECT_FLAT',
    payload: flat
  }
    console.log(flat)
 }

