import Immutable from 'immutable';

export const initialState = Immutable.fromJS({
  Background: {},
  ClassTraining: {},
  CharacterBackground: {},
  CharacterClass: {},
  CharacterRace: {},
});

export const personalDecisionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ('characterBackgroundResult'):
      return state.setIn(['CharacterBackground'], Immutable.fromJS(action.characterBackground));
    case ('characterClassResult'):
      return state.setIn(['CharacterClass'], Immutable.fromJS(action.characterClass));
    case ('characterRaceResult'):
      return state.setIn(['CharacterRace'], Immutable.fromJS(action.characterRace));
    case ('backgroundResult'):
      return state.setIn(['Background'], Immutable.fromJS(action.background));
    case ('classTrainingResult'):
      return state.setIn(['ClassTraining'], Immutable.fromJS(action.classTraining));
    default: return state;
  }
};
