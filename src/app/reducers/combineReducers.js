import { combineReducers } from 'redux-immutable';

// Reducers
import { exampleReducer } from './exampleReducer.js';
// import routeReducer from './route-reducer.js';

const combinedReducers = combineReducers({
  example: exampleReducer,
  // routing: routeReducer,
});

export default combinedReducers;
