import {
  incrementCounter,
  parentsResult,
  parentsAlignmentResult,
 } from '../actions/exampleActionCreators.js';
import Immutable from 'immutable';
import { rollInfo } from '../data/initialStateData.js';

export const initialState = Immutable.fromJS({
  rollInfo,
  rollResults: {
    Origins: {
      Parents: {},
      Alignment: {},
      Occupation: {},
      Class: {},
    },
  },
  triMet: {
  name: 'a man needs a name',
  count: 0,
  },
});

export const exampleReducer = (state = initialState, action) => {
  switch(action.type) {
    case ('incrementCounter'):
      return state.setIn(['triMet', 'count'], Immutable.fromJS(action.count));
    case ('parentsResult'):
      return state.setIn(['rollResults', 'Origins', 'Parents'], Immutable.fromJS(action.parents));
    case ('parentsAlignmentResult'):
      return state.setIn(['rollResults', 'Origins', 'Alignment', action.parent], Immutable.fromJS(action.parentAlignment));
    case ('parentsOccupationResult'):
      return state.setIn(['rollResults', 'Origins', 'Occupation', action.parent], Immutable.fromJS(action.parentOccupation));
    case ('parentsClassResult'):
      return state.setIn(['rollResults', 'Origins', 'Class', action.parent], Immutable.fromJS(action.parentClass));
    default: return state;
  }
};
