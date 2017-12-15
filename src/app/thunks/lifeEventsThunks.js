import * as actionCreators from '../actions/lifeEventsActionCreators.js';
import { currentAgeAndLifeEvents } from '../utils/lifeEvents/currentAgeAndLifeEvents.js';
import { event } from '../utils/lifeEvents/event.js';
import Immutable from 'immutable';

export function getLifeEvents() {
  return function(dispatch, getState) {
    const currentAgeAndLifeEventsResult = currentAgeAndLifeEvents();
    const currentAgeString = getState().getIn(['core', 'rollInfo', 'Life Events', 'Current Age', currentAgeAndLifeEventsResult.currentAge ]);

    dispatch(actionCreators.resetLifeEvents({}));
    dispatch(actionCreators.currentAgeResult({ currentAge: currentAgeString }));
    dispatch(actionCreators.numberOfLifeEventsResult({ numberOfLifeEvents: currentAgeAndLifeEventsResult.lifeEventsNumber }));

    for (let i = 0; i < currentAgeAndLifeEventsResult.lifeEventsNumber; i++) {
      const eventResult = event();
      let eventResultString;

      if (!eventResult.secondaryTable) {
        eventResultString = getState().getIn(['core', 'rollInfo', 'Life Events', 'Event', eventResult.outcome]);
        dispatch(actionCreators.eventResult({ lifeEvent: eventResultString, lifeEventId: i+1 }));

      } else {

        if (eventResult.multiTable) {
          const crimeResultString = getState().getIn(['core', 'rollInfo', 'Secondary Tables', eventResult.secondaryTable.one, eventResult.secondaryTableResult.one]);
          const punishmentResultString = getState().getIn(['core', 'rollInfo', 'Secondary Tables', eventResult.secondaryTable.two, eventResult.secondaryTableResult.two]);

          eventResultString = getState().getIn(['core', 'rollInfo', 'Life Events', 'Event', eventResult.outcome]) + ' (Crime) ' + crimeResultString + ' (Punishment) ' + punishmentResultString;
          dispatch(actionCreators.eventResult({ lifeEvent: eventResultString, lifeEventId: i+1 }));

        } else {
          const secondaryTableResultString = getState().getIn(['core', 'rollInfo', 'Secondary Tables', eventResult.secondaryTable, eventResult.secondaryTableResult]);

          eventResultString = getState().getIn(['core', 'rollInfo', 'Life Events', 'Event', eventResult.outcome]) + ' (' + eventResult.secondaryTable + ') ' + secondaryTableResultString;
          dispatch(actionCreators.eventResult({ lifeEvent: eventResultString, lifeEventId: i+1 }));
        }
      }
    }
  };
};
