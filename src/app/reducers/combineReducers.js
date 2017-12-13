import { combineReducers } from 'redux-immutable';

// Reducers
import { coreReducer } from './coreReducer.js';
import { parentsReducer } from './parentsReducer.js';
import { siblingsReducer } from './siblingsReducer.js';
import { familyAndFriendsReducer } from './familyAndFriendsReducer.js';
import { lifeEventsReducer } from './lifeEventsReducer.js';
// import routeReducer from './route-reducer.js';

const combinedReducers = combineReducers({
  core: coreReducer,
  parents: parentsReducer,
  siblings: siblingsReducer,
  familyAndFriends: familyAndFriendsReducer,
  lifeEvents: lifeEventsReducer,
  // routing: routeReducer,
});

export default combinedReducers;
