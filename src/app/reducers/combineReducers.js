import { combineReducers } from 'redux-immutable';

// Reducers
import { coreReducer } from './coreReducer.js';
import { parentsReducer } from './parentsReducer.js';
import { siblingsReducer } from './siblingsReducer.js';
// import routeReducer from './route-reducer.js';

const combinedReducers = combineReducers({
  example: coreReducer,
  parents: parentsReducer,
  siblings: siblingsReducer,
  // routing: routeReducer,
});

export default combinedReducers;
