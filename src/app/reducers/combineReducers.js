import { combineReducers } from 'redux-immutable';

// Reducers
import { coreReducer } from './coreReducer.js';
import { parentsReducer } from './parentsReducer.js';
import { siblingsReducer } from './siblingsReducer.js';
import { familyAndFriendsReducer } from './familyAndFriendsReducer.js';
import { personalDecisionsReducer } from './personalDecisionsReducer.js';
// import routeReducer from './route-reducer.js';

const combinedReducers = combineReducers({
  core: coreReducer,
  parents: parentsReducer,
  siblings: siblingsReducer,
  familyAndFriends: familyAndFriendsReducer,
  personalDecisions: personalDecisionsReducer,
  // routing: routeReducer,
});

export default combinedReducers;
