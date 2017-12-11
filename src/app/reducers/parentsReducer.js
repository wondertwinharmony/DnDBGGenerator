import Immutable from 'immutable';
import { rollInfo } from '../data/initialStateData.js';

export const initialState = Immutable.fromJS({
  Parents: {},
  Alignment: {},
  Occupation: {},
  Class: {},
});

export const parentsReducer = (state = initialState, action) => {
  switch(action.type) {
    case ('parentsResult'):
      return state.setIn(['Parents'], Immutable.fromJS(action.parents));
    case ('parentsAlignmentResult'):
      return state.setIn(['Alignment', action.parent], Immutable.fromJS(action.parentAlignment));
    case ('parentsOccupationResult'):
      return state.setIn(['Occupation', action.parent], Immutable.fromJS(action.parentOccupation));
    case ('parentsClassResult'):
      return state.setIn(['Class', action.parent], Immutable.fromJS(action.parentClass));
    default: return state;
  }
};
