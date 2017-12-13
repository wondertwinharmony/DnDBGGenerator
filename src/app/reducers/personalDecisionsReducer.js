import Immutable from 'immutable';

export const initialState = Immutable.fromJS({
  Background: {},
  ClassTraining: {},
});

export const personalDecisionsReducer = (state = initialState, action) => {
  switch(action.type) {
    case ('backgroundResult'):
      return state.setIn(['Background'], Immutable.fromJS(action.background));
    case ('classTrainingResult'):
      return state.setIn(['ClassTraining'], Immutable.fromJS(action.classTraining));
    default: return state;
  }
};
