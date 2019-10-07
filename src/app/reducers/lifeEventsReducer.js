import Immutable from 'immutable';

export const initialState = Immutable.fromJS({
  Age: {},
  NumberOfLifeEvents: {},
  LifeEvents: {},
});

export const lifeEventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ('currentAgeResult'):
      return state.setIn(['Age'], Immutable.fromJS(action.currentAge));
    case ('numberOfLifeEventsResult'):
      return state.setIn(['NumberOfLifeEvents'], Immutable.fromJS(action.numberOfLifeEvents));
    case ('eventResult'):
      return state.setIn(['LifeEvents', action.lifeEventId], Immutable.fromJS(action.lifeEvent));
    case ('resetLifeEvents'):
      return initialState;
    default: return state;
  }
};
