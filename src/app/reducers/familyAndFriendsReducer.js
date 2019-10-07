import Immutable from 'immutable';

export const initialState = Immutable.fromJS({
  Family: {},
  Race: {},
  Occupation: {},
  Class: {},
  Alignment: {},
  Attitude: {},
  AbsentParentFate: {},
  ChildhoodHome: {},
  ChildhoodMemories: {},
});

export const familyAndFriendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ('familyResult'):
      return state.setIn(['Family'], Immutable.fromJS(action.family));
    case ('absentParentFateResult'):
      return state.setIn(['AbsentParentFate', action.parent], Immutable.fromJS(action.absentParentFate));
    case ('childhoodHomeResult'):
      return state.setIn(['ChildhoodHome'], Immutable.fromJS(action.childhoodHome));
    case ('childhoodMemoriesResult'):
      return state.setIn(['ChildhoodMemories'], Immutable.fromJS(action.childhoodMemories));
    case ('familyOccupationResult'):
      return state.setIn(['Occupation'], Immutable.fromJS(action.familyOccupation));
    case ('familyAlignmentResult'):
      return state.setIn(['Alignment'], Immutable.fromJS(action.familyAlignment));
    case ('raceResult'):
      return state.setIn(['Race'], Immutable.fromJS(action.race));
    case ('familyAttitudeResult'):
      return state.setIn(['Attitude'], Immutable.fromJS(action.familyAttitude));
    case ('familyClassResult'):
      return state.setIn(['Class'], Immutable.fromJS(action.familyClass));
    default: return state;
  }
};
