import Immutable from 'immutable';
import { rollInfo } from '../data/initialStateData.js';

export const initialState = Immutable.fromJS({
  rollInfo,
});

export const coreReducer = (state = initialState, action) => {
  switch (action.type) {
    default: return state;
  }
};
