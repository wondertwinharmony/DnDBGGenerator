import { incrementCounter } from '../actions/exampleActionCreators.js';
import Immutable from 'immutable';
import { rollInfo } from '../data/initialStateData.js';

export const initialState = Immutable.fromJS({
  rollInfo,
});

export const exampleReducer = (state = initialState, action) => {
  switch(action.type) {
    case ('incrementCounter'):
      return state.setIn(['triMet', 'count'], Immutable.fromJS(action.count));
    default: return state;
  }
};
