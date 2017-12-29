import * as actionCreators from '../actions/lifeEventsActionCreators.js';
import { currentAgeAndLifeEvents } from '../utils/lifeEvents/currentAgeAndLifeEvents.js';
import { event } from '../utils/lifeEvents/event.js';
import Immutable from 'immutable';

export function getLifeEvents() {
  return function(dispatch, getState) {
    //TODO: currentAgeAndLifeEvents needs to take an age input
    // const currentAgeAndLifeEventsResult = currentAgeAndLifeEvents(age);
    const currentAgeAndLifeEventsResult = currentAgeAndLifeEvents(100);

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

        if (!eventResult.characterEncounter && !eventResult.outcomeResult) {
          dispatch(actionCreators.eventResult({ lifeEvent: eventResultString, lifeEventId: i+1 }));
        }

        else if (!eventResult.characterEncounter) {
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
          const supplementalCharacterString = `${eventResult.outcomeResult} ${supplementalCharacterRaceString} ${supplementalCharacterClassString}  with a(n) ${supplementalCharacterBackgroundString} background and a ${supplementalCharacterAlignmentString} alignment. This supplemental character is ${supplementalCharacterAttitudeString} towards you and is currently ${supplementalCharacterStatusString}.`;

          completeEventResultString = eventResultString + supplementalCharacterString;
          dispatch(actionCreators.eventResult({ lifeEvent: completeEventResultString, lifeEventId: i+1 }));
        }

      }

      else {

        if (eventResult.multiTable) {
          const crimeResultString = getState().getIn(['core', 'rollInfo', 'Secondary Tables', eventResult.secondaryTable.one, eventResult.secondaryTableResult.one]);
          const punishmentResultString = getState().getIn(['core', 'rollInfo', 'Secondary Tables', eventResult.secondaryTable.two, eventResult.secondaryTableResult.two]);

          if (eventResult.secondaryTableResult.sentenceYears) {
            eventResultString = `${getState().getIn(['core', 'rollInfo', 'Life Events', 'Event', eventResult.outcome])} (Crime) ${crimeResultString} (Punishment) ${punishmentResultString} You served a sentence of ${eventResult.secondaryTableResult.sentenceYears} years or succeeded in escaping afer that time`;
          } else {
            eventResultString = `${getState().getIn(['core', 'rollInfo', 'Life Events', 'Event', eventResult.outcome])} (Crime) ${crimeResultString} (Punishment) ${punishmentResultString}`;
          }

          dispatch(actionCreators.eventResult({ lifeEvent: eventResultString, lifeEventId: i+1 }));
        }

        if (eventResult.secondaryTable === 'Adventures') {
          const adventureResultString = getState().getIn(['core', 'rollInfo', 'Secondary Tables', eventResult.secondaryTable, eventResult.secondaryTableResult]);
          eventResultString = `${getState().getIn(['core', 'rollInfo', 'Life Events', 'Event', eventResult.outcome])} ${adventureResultString} ${eventResult.secondaryRollString}`;

          dispatch(actionCreators.eventResult({ lifeEvent: eventResultString, lifeEventId: i+1 }));
        }

        if (eventResult.secondaryTable === 'Boons') {
          const boonsResultString = getState().getIn(['core', 'rollInfo', 'Secondary Tables', eventResult.secondaryTable, eventResult.secondaryTableResult]);

          if (eventResult.commoner) {
            const supplementalCharacterRaceString =  getState().getIn(['core', 'rollInfo', 'Supplemental Tables', 'Race', eventResult.commoner.race]);
            const supplementalCharacterAlignmentString = getState().getIn(['core', 'rollInfo', 'Supplemental Tables', 'Alignment', eventResult.commoner.alignment]).toLowerCase();
            const supplementalCharacterAttitudeString = getState().getIn(['core', 'rollInfo', 'Supplemental Tables', 'Attitude', eventResult.commoner.attitude]).toLowerCase();
            const supplementalCharacterStatusString = getState().getIn(['core', 'rollInfo', 'Supplemental Tables', 'Status', eventResult.commoner.status]).toLowerCase();
            const supplementalCharacterBackgroundString = eventResult.commoner.background.toLowerCase();
            const supplementalCharacterString = `${supplementalCharacterRaceString} with a(n) ${supplementalCharacterBackgroundString} background and a ${supplementalCharacterAlignmentString} alignment. This commoner is ${supplementalCharacterAttitudeString} towards you.`

            eventResultString = `${boonsResultString} ${supplementalCharacterString}`;
          }

          else if (eventResult.foundMoney) {
            eventResultString = `${boonsResultString} You found ${eventResult.foundMoney} gp.`;
          }

          else if (eventResult.stipend) {
            eventResultString = `${boonsResultString} You inherited enough wealth to live a comfortable lifestyle for ${eventResult.stipend} years.`;
          }

          else {
            eventResultString = `${boonsResultString}`;
          }

          dispatch(actionCreators.eventResult({ lifeEvent: eventResultString, lifeEventId: i+1 }));
        }


        if (eventResult.secondaryTable === 'Arcane Matters') {
          const arcaneMattersResultString = getState().getIn(['core', 'rollInfo', 'Secondary Tables', eventResult.secondaryTable, eventResult.secondaryTableResult]);

          if (eventResult.secondaryTableResult === '10') {
            const divinerResult1 = event();
            const divinerResult2 = event();
            const divinerResultString1 = getState().getIn(['core', 'rollInfo', 'Life Events', 'Event', divinerResult1.outcome]);
            const divinerResultString2 = getState().getIn(['core', 'rollInfo', 'Life Events', 'Event', divinerResult2.outcome]);

            eventResultString = `${getState().getIn(['core', 'rollInfo', 'Life Events', 'Event', eventResult.outcome])} Portent 1: ${divinerResultString1} Portent 2: ${divinerResultString2}`;
          } else {
            eventResultString = `${getState().getIn(['core', 'rollInfo', 'Life Events', 'Event', eventResult.outcome])} ${arcaneMattersResultString}`;
          }

          dispatch(actionCreators.eventResult({ lifeEvent: eventResultString, lifeEventId: i+1 }));
        }

        if (eventResult.secondaryTable === 'Supernatural Events') {
          const supernaturalEventsResultString = getState().getIn(['core', 'rollInfo', 'Secondary Tables', eventResult.secondaryTable, eventResult.secondaryTableResult]);

          if (eventResult.enslavedYears) {
            eventResultString = `${supernaturalEventsResultString} You were enslaved for ${eventResult.enslavedYears} years.`;
          }

          else if (eventResult.additionalGold) {
            eventResultString = `${supernaturalEventsResultString} On a failed save you start with an additional ${eventResult.additionalGold} gp.`;
          }

          else if (eventResult.possession) {
            eventResultString = `${supernaturalEventsResultString} You were possessed by a ${eventResult.possession}.`;
          }

          else {
            eventResultString = `${supernaturalEventsResultString}`;
          }

          dispatch(actionCreators.eventResult({ lifeEvent: eventResultString, lifeEventId: i+1 }));
        }

        if (eventResult.secondaryTable === 'Tragedies') {
          const tragediesResultString = getState().getIn(['core', 'rollInfo', 'Secondary Tables', eventResult.secondaryTable, eventResult.secondaryTableResult]);

          if (eventResult.familyFriendDeathId) {
            eventResultString = `${tragediesResultString} ${getState().getIn(['core', 'rollInfo', 'Supplemental Tables', 'Cause of Death', eventResult.familyFriendDeathId])}.`;
          }

          else if (eventResult.yearsImprisoned) {
            eventResultString = `${tragediesResultString} You were imprisoned for ${eventResult.yearsImprisoned} years.`;
          }

          else if (eventResult.endedRelationship) {
            eventResultString = `${tragediesResultString} ${eventResult.endedRelationship}`;
          }

          else if (eventResult.romanticPartnerDeathId && eventResult.fault) {
            eventResultString = `${tragediesResultString} ${getState().getIn(['core', 'rollInfo', 'Supplemental Tables', 'Cause of Death', eventResult.romanticPartnerDeathId])}. ${eventResult.fault}`;
          }

          else if (eventResult.romanticPartnerDeathId) {
            eventResultString = `${tragediesResultString} ${getState().getIn(['core', 'rollInfo', 'Supplemental Tables', 'Cause of Death', eventResult.romanticPartnerDeathId])}.`;
          }

          else {
            eventResultString = `${tragediesResultString}`;
          }

          dispatch(actionCreators.eventResult({ lifeEvent: eventResultString, lifeEventId: i+1 }));
        }

        if (eventResult.secondaryTable === 'War' || eventResult.secondaryTable === 'Weird Stuff') {
          const secondaryTableResultString = getState().getIn(['core', 'rollInfo', 'Secondary Tables', eventResult.secondaryTable, eventResult.secondaryTableResult]);

          eventResultString = getState().getIn(['core', 'rollInfo', 'Life Events', 'Event', eventResult.outcome]) + ' (' + eventResult.secondaryTable + ') ' + secondaryTableResultString;
          dispatch(actionCreators.eventResult({ lifeEvent: eventResultString, lifeEventId: i+1 }));
        }
      }
    }
  };
};
