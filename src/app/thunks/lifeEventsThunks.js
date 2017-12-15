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
      let eventResultString,
          completeEventResultString;

      if (!eventResult.secondaryTable) {
        eventResultString = getState().getIn(['core', 'rollInfo', 'Life Events', 'Event', eventResult.outcome]);
        // dispatch(actionCreators.eventResult({ lifeEvent: eventResultString, lifeEventId: i+1 }));
        // console.log('Event: ', eventResult);

        if (!eventResult.characterEncounter && !eventResult.outcomeResult) {
          console.log('You fell in love Event: ', eventResult, '\n Event Number: ', i+1);
          dispatch(actionCreators.eventResult({ lifeEvent: eventResultString, lifeEventId: i+1 }));
        }

        else if (!eventResult.characterEncounter) {
          console.log('Non-encounter Event: ', eventResult, ' ', eventResult.outcomeResult, '\n Event Number: ', i+1);
          completeEventResultString = eventResultString + eventResult.outcomeResult;
          dispatch(actionCreators.eventResult({ lifeEvent: completeEventResultString, lifeEventId: i+1 }));
        }

        else {
          const supplementalCharacterAlignmentString = getState().getIn(['core', 'rollInfo', 'Supplemental Tables', 'Alignment', eventResult.characterEncounter.alignment]).toLowerCase();
          const supplementalCharacterRaceString =  getState().getIn(['core', 'rollInfo', 'Supplemental Tables', 'Race', eventResult.characterEncounter.race]).toLowerCase();
          const supplementalCharacterClassString = getState().getIn(['core', 'rollInfo', 'Supplemental Tables', 'Class', eventResult.characterEncounter.class]).toLowerCase();
          const supplementalCharacterAttitudeString = getState().getIn(['core', 'rollInfo', 'Supplemental Tables', 'Attitude', eventResult.characterEncounter.attitude]).toLowerCase();
          const supplementalCharacterStatusString = getState().getIn(['core', 'rollInfo', 'Supplemental Tables', 'Status', eventResult.characterEncounter.status]).toLowerCase();
          const supplementalCharacterBackgroundString = eventResult.characterEncounter.background.toLowerCase();
          const supplementalCharacterString = eventResult.outcomeResult + supplementalCharacterRaceString + ' ' + supplementalCharacterClassString + ' with a(n) ' + supplementalCharacterBackgroundString + ' background and a ' + supplementalCharacterAlignmentString + ' alignment. This supplemental character is ' + supplementalCharacterAttitudeString + ' towards you and is currently ' + supplementalCharacterStatusString + '.';
          
          completeEventResultString = eventResultString + supplementalCharacterString;
          console.log('Encounter Event: ', eventResult, ' ', eventResult.outcomeResult, '\n Complete String: ', completeEventResultString, '\n Event Number: ', i+1);
          dispatch(actionCreators.eventResult({ lifeEvent: completeEventResultString, lifeEventId: i+1 }));
        }

      }

      else {

        if (eventResult.multiTable) {
          const crimeResultString = getState().getIn(['core', 'rollInfo', 'Secondary Tables', eventResult.secondaryTable.one, eventResult.secondaryTableResult.one]);
          const punishmentResultString = getState().getIn(['core', 'rollInfo', 'Secondary Tables', eventResult.secondaryTable.two, eventResult.secondaryTableResult.two]);

          eventResultString = getState().getIn(['core', 'rollInfo', 'Life Events', 'Event', eventResult.outcome]) + ' (Crime) ' + crimeResultString + ' (Punishment) ' + punishmentResultString;
          dispatch(actionCreators.eventResult({ lifeEvent: eventResultString, lifeEventId: i+1 }));

        }

        else {
          const secondaryTableResultString = getState().getIn(['core', 'rollInfo', 'Secondary Tables', eventResult.secondaryTable, eventResult.secondaryTableResult]);

          eventResultString = getState().getIn(['core', 'rollInfo', 'Life Events', 'Event', eventResult.outcome]) + ' (' + eventResult.secondaryTable + ') ' + secondaryTableResultString;
          dispatch(actionCreators.eventResult({ lifeEvent: eventResultString, lifeEventId: i+1 }));
        }
      }
    }
  };
};
