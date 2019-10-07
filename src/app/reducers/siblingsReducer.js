import Immutable from 'immutable';

export const initialState = Immutable.fromJS({
  NumberOfSiblings: {},
  BirthOrder: {},
  Occupation: {},
  Alignment: {},
  Status: {},
  Attitude: {},
  Class: {},
});

export const siblingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ('siblingsResult'):
      return state.setIn(['NumberOfSiblings'], Immutable.fromJS(action.numberOfSiblings));
    case ('siblingsBirthOrderResult'):
      return state.setIn(['BirthOrder', action.sibling], Immutable.fromJS(action.siblingsBirthOrder));
    case ('siblingsOccupationResult'):
      return state.setIn(['Occupation', action.sibling], Immutable.fromJS(action.siblingsOccupation));
    case ('siblingsAlignmentResult'):
      return state.setIn(['Alignment', action.sibling], Immutable.fromJS(action.siblingsAlignment));
    case ('siblingsStatusResult'):
      return state.setIn(['Status', action.sibling], Immutable.fromJS(action.siblingsStatus));
    case ('siblingsAttitudeResult'):
      return state.setIn(['Attitude', action.sibling], Immutable.fromJS(action.siblingsAttitude));
    case ('siblingsClassResult'):
      return state.setIn(['Class', action.sibling], Immutable.fromJS(action.siblingsClass));
    case ('resetStore'):
      return initialState;
    default: return state;
  }
};
