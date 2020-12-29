// import { combineReducers } from 'redux'

// // Rule to reducers, must never return undefined!!!
// const cars = (state = [], action) => {
//   switch(action.type) {
//       case 'ADD_CAR':
//           return [ action.value, ...state ]
//       case 'REMOVE_CAR':
//           const newState = [ ...state ]
//           newState.splice(action.value, 1);
//           return newState;
//       default :
//         return state
//   }
// }
 
// // !Rules
// // can not change/mutate state directly - pass by reference rule
// // Allow Redux to manage this change  


// const user = (state = null) => state

// const poop = (state = null) => state

// const hello = (state = null) => state

// const cola = (state = null) => state

// export default combineReducers({ user, cars, poop, hello, cola })


// // !Rules
// // * all properties on state have a reducers!!!!!
// // * all reducers get exported in the combineReducers object
// // * All reducers must return state
