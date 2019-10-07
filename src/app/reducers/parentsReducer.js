import Immutable from 'immutable';

export const initialState = Immutable.fromJS({
  Parents: {},
  Birthplace: {},
  ParentsRace: {},
  Alignment: {},
  Occupation: {},
  Class: {},
});

export const parentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ('parentsResult'):
      return state.setIn(['Parents'], Immutable.fromJS(action.parents));
    case ('birthplaceResult'):
      return state.setIn(['Birthplace'], Immutable.fromJS(action.birthplace));
    case ('parentsRaceResult'):
      return state.setIn(['ParentsRace'], Immutable.fromJS(action.parentsRace));
    case ('parentsAlignmentResult'):
      return state.setIn(['Alignment', action.parent], Immutable.fromJS(action.parentAlignment));
    case ('parentsOccupationResult'):
      return state.setIn(['Occupation', action.parent], Immutable.fromJS(action.parentOccupation));
    case ('parentsClassResult'):
      return state.setIn(['Class', action.parent], Immutable.fromJS(action.parentClass));
    default: return state;
  }
};
