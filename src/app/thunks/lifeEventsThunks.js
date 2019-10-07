import * as actionCreators from '../actions/lifeEventsActionCreators.js';
import { currentAgeAndLifeEvents } from '../utils/lifeEvents/currentAgeAndLifeEvents.js';
import { event } from '../utils/lifeEvents/event.js';
import { createAdventurer } from '../utils/creators/adventurerCreator.js';
import Roll from 'roll';

const roll = new Roll();

export function getLifeEvents(ageInput) {
  return function (dispatch, getState) {
    const currentAgeAndLifeEventsResult = currentAgeAndLifeEvents(ageInput);
    const currentAgeString = getState().getIn(['core', 'rollInfo', 'Life Events', 'Current Age', currentAgeAndLifeEventsResult.currentAge]);

    dispatch(actionCreators.resetLifeEvents({}));
    dispatch(actionCreators.currentAgeResult({ currentAge: currentAgeString }));
    dispatch(actionCreators.numberOfLifeEventsResult({ numberOfLifeEvents: currentAgeAndLifeEventsResult.lifeEventsNumber }));

    for (let i = 0; i < currentAgeAndLifeEventsResult.lifeEventsNumber; i++) {
      const eventResult = event();
      let eventResultString;
      let completeEventResultString;

      if (!eventResult.secondaryTable) {
        eventResultString = getState().getIn(['core', 'rollInfo', 'Life Events', 'Event', eventResult.outcome]);

        if (!eventResult.characterEncounter && !eventResult.outcomeResult) {
          dispatch(actionCreators.eventResult({ lifeEvent: eventResultString, lifeEventId: i + 1 }));
        } else if (!eventResult.characterEncounter) {
          completeEventResultString = eventResultString + eventResult.outcomeResult;
          dispatch(actionCreators.eventResult({ lifeEvent: completeEventResultString, lifeEventId: i + 1 }));
        } else {
          let supplementalCharacterAlignmentString = '';
          const fiftyPercentSupplemental = roll.roll('d2').result;

          if (eventResult.characterEncounter.alignment === '3') {
            supplementalCharacterAlignmentString = fiftyPercentSupplemental === 1 ? 'chaotic evil' : 'chaotic neutral';
          } else if (eventResult.characterEncounter.alignment === '1617') {
            supplementalCharacterAlignmentString = fiftyPercentSupplemental === 1 ? 'lawful good' : 'lawful neutral';
          } else if (eventResult.characterEncounter.alignment === '18') {
            supplementalCharacterAlignmentString = fiftyPercentSupplemental === 1 ? 'chaotic good' : 'chaotic neutral';
          } else {
            supplementalCharacterAlignmentString = getState().getIn(['core', 'rollInfo', 'Supplemental Tables', 'Alignment', eventResult.characterEncounter.alignment]).toLowerCase();
          }

          const supplementalCharacterRaceString = getState().getIn(['core', 'rollInfo', 'Supplemental Tables', 'Race', eventResult.characterEncounter.race]).toLowerCase();
          const supplementalCharacterClassString = getState().getIn(['core', 'rollInfo', 'Supplemental Tables', 'Class', eventResult.characterEncounter.class]).toLowerCase();
          const supplementalCharacterAttitudeString = getState().getIn(['core', 'rollInfo', 'Supplemental Tables', 'Attitude', eventResult.characterEncounter.attitude]).toLowerCase();
          const supplementalCharacterStatusString = getState().getIn(['core', 'rollInfo', 'Supplemental Tables', 'Status', eventResult.characterEncounter.status]).toLowerCase();
          const supplementalCharacterBackgroundString = eventResult.characterEncounter.background.toLowerCase();
          let supplementalCharacterString = '';

          if (eventResult.outcome === '3140') {
            supplementalCharacterString = `${eventResult.outcomeResult} ${supplementalCharacterRaceString} ${supplementalCharacterClassString}  with a(n) ${supplementalCharacterBackgroundString} background and a ${supplementalCharacterAlignmentString} alignment. This character is ${supplementalCharacterAttitudeString} towards you and is currently ${supplementalCharacterStatusString}.  Work with your DM to determine this hostile character’s identity and the danger this enemy poses to you.`;
          }

          if (eventResult.outcome === '4150') {
            supplementalCharacterString = `${eventResult.outcomeResult} ${supplementalCharacterRaceString} ${supplementalCharacterClassString}  with a(n) ${supplementalCharacterBackgroundString} background and a ${supplementalCharacterAlignmentString} alignment. This character is ${supplementalCharacterAttitudeString} towards you and is currently ${supplementalCharacterStatusString}. Work with your DM to add more detail to this friendly character and establish how your friendship began.`;
          }

          if (eventResult.outcome === '7175') {
            supplementalCharacterString = `${eventResult.outcomeResult} ${supplementalCharacterRaceString} ${supplementalCharacterClassString}  with a(n) ${supplementalCharacterBackgroundString} background and a ${supplementalCharacterAlignmentString} alignment. This character is ${supplementalCharacterAttitudeString} towards you and is currently ${supplementalCharacterStatusString}. Work out additional details with your DM as needed to fit this character into your backstory.`;
          }

          completeEventResultString = eventResultString + supplementalCharacterString;
          dispatch(actionCreators.eventResult({ lifeEvent: completeEventResultString, lifeEventId: i + 1 }));
        }
      } else {
        if (eventResult.multiTable) {
          const crimeResultString = getState().getIn(['core', 'rollInfo', 'Secondary Tables', eventResult.secondaryTable.one, eventResult.secondaryTableResult.one]);
          const punishmentResultString = getState().getIn(['core', 'rollInfo', 'Secondary Tables', eventResult.secondaryTable.two, eventResult.secondaryTableResult.two]);

          if (eventResult.secondaryTableResult.sentenceYears) {
            eventResultString = `${getState().getIn(['core', 'rollInfo', 'Life Events', 'Event', eventResult.outcome])} The crime was ${crimeResultString}. ${punishmentResultString} You served a sentence of ${eventResult.secondaryTableResult.sentenceYears} year(s) or succeeded in escaping after that time.`;
          } else {
            eventResultString = `${getState().getIn(['core', 'rollInfo', 'Life Events', 'Event', eventResult.outcome])} The crime was ${crimeResultString}. ${punishmentResultString}`;
          }

          dispatch(actionCreators.eventResult({ lifeEvent: eventResultString, lifeEventId: i + 1 }));
        }

        if (eventResult.secondaryTable === 'Adventures') {
          const adventureResultString = getState().getIn(['core', 'rollInfo', 'Secondary Tables', eventResult.secondaryTable, eventResult.secondaryTableResult]);
          eventResultString = `${getState().getIn(['core', 'rollInfo', 'Life Events', 'Event', eventResult.outcome])} ${adventureResultString} ${eventResult.secondaryRollString} Work with your DM to determine the nature of the adventure and the creatures you encountered.`;

          dispatch(actionCreators.eventResult({ lifeEvent: eventResultString, lifeEventId: i + 1 }));
        }

        if (eventResult.secondaryTable === 'Boons') {
          const boonsResultString = getState().getIn(['core', 'rollInfo', 'Secondary Tables', eventResult.secondaryTable, eventResult.secondaryTableResult]);

          if (eventResult.commoner) {
            let supplementalCharacterAlignmentString = '';
            const fiftyPercentSupplemental = roll.roll('d2').result;

            if (eventResult.commoner.alignment === '3') {
              supplementalCharacterAlignmentString = fiftyPercentSupplemental === 1 ? 'chaotic evil' : 'chaotic neutral';
            } else if (eventResult.commoner.alignment === '1617') {
              supplementalCharacterAlignmentString = fiftyPercentSupplemental === 1 ? 'lawful good' : 'lawful neutral';
            } else if (eventResult.commoner.alignment === '18') {
              supplementalCharacterAlignmentString = fiftyPercentSupplemental === 1 ? 'chaotic good' : 'chaotic neutral';
            } else {
              supplementalCharacterAlignmentString = getState().getIn(['core', 'rollInfo', 'Supplemental Tables', 'Alignment', eventResult.commoner.alignment]).toLowerCase();
            }
            const supplementalCharacterRaceString = getState().getIn(['core', 'rollInfo', 'Supplemental Tables', 'Race', eventResult.commoner.race]);
            const supplementalCharacterAttitudeString = getState().getIn(['core', 'rollInfo', 'Supplemental Tables', 'Attitude', eventResult.commoner.attitude]).toLowerCase();
            const supplementalCharacterStatusString = getState().getIn(['core', 'rollInfo', 'Supplemental Tables', 'Status', eventResult.commoner.status]).toLowerCase();
            const supplementalCharacterBackgroundString = eventResult.commoner.background.toLowerCase();
            const supplementalCharacterString = `${supplementalCharacterRaceString} with a(n) ${supplementalCharacterBackgroundString} background and a ${supplementalCharacterAlignmentString} alignment. This commoner is ${supplementalCharacterAttitudeString} towards you.`;
            eventResultString = `${boonsResultString} ${supplementalCharacterString}`;
          } else if (eventResult.foundMoney) {
            eventResultString = `${boonsResultString} You have ${eventResult.foundMoney} gp in addition to your regular starting funds.`;
          } else if (eventResult.stipend) {
            eventResultString = `A distant relative left you a stipend that enables you to live at the comfortable lifestyle for ${eventResult.stipend} year(s). ${boonsResultString}`;
          } else {
            eventResultString = `${boonsResultString}`;
          }

          dispatch(actionCreators.eventResult({ lifeEvent: eventResultString, lifeEventId: i + 1 }));
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

          dispatch(actionCreators.eventResult({ lifeEvent: eventResultString, lifeEventId: i + 1 }));
        }

        if (eventResult.secondaryTable === 'Supernatural Events') {
          const supernaturalEventsResultString = getState().getIn(['core', 'rollInfo', 'Secondary Tables', eventResult.secondaryTable, eventResult.secondaryTableResult]);

          if (eventResult.enslavedYears) {
            eventResultString = `${supernaturalEventsResultString} ${eventResult.enslavedYears} year(s).`;
          } else if (eventResult.additionalGold) {
            eventResultString = `${supernaturalEventsResultString} ${eventResult.additionalGold} gp.`;
          } else if (eventResult.possession) {
            eventResultString = `${supernaturalEventsResultString} The type of creature that possessed you was a(n) ${eventResult.possession}.`;
          } else {
            eventResultString = `${supernaturalEventsResultString}`;
          }

          dispatch(actionCreators.eventResult({ lifeEvent: eventResultString, lifeEventId: i + 1 }));
        }

        if (eventResult.secondaryTable === 'Tragedies') {
          const tragediesResultString = getState().getIn(['core', 'rollInfo', 'Secondary Tables', eventResult.secondaryTable, eventResult.secondaryTableResult]);

          if (eventResult.familyFriendDeathId) {
            eventResultString = `${tragediesResultString} ${getState().getIn(['core', 'rollInfo', 'Supplemental Tables', 'Cause of Death', eventResult.familyFriendDeathId])}.`;
          } else if (eventResult.yearsImprisoned) {
            eventResultString = `${tragediesResultString} ${eventResult.yearsImprisoned} year(s) at hard labor, in jail, or shackled to an oar in a slave galley.`;
          } else if (eventResult.endedRelationship) {
            eventResultString = `${tragediesResultString} ${eventResult.endedRelationship}`;
          } else if (eventResult.romanticPartnerDeathId && eventResult.fault) {
            eventResultString = `${tragediesResultString} ${getState().getIn(['core', 'rollInfo', 'Supplemental Tables', 'Cause of Death', eventResult.romanticPartnerDeathId])}. ${eventResult.fault}`;
          } else if (eventResult.romanticPartnerDeathId) {
            eventResultString = `${tragediesResultString} ${getState().getIn(['core', 'rollInfo', 'Supplemental Tables', 'Cause of Death', eventResult.romanticPartnerDeathId])}.`;
          } else {
            eventResultString = `${tragediesResultString}`;
          }

          dispatch(actionCreators.eventResult({ lifeEvent: eventResultString, lifeEventId: i + 1 }));
        }

        if (eventResult.secondaryTable === 'Weird Stuff') {
          const weirdStuffResultString = getState().getIn(['core', 'rollInfo', 'Secondary Tables', eventResult.secondaryTable, eventResult.secondaryTableResult]);

          if (eventResult.secondaryTableResult === '1') {
            const weeksAsToad = roll.roll('d4').result;
            eventResultString = `${weirdStuffResultString} ${weeksAsToad} week(s).`;
          } else if (eventResult.secondaryTableResult === '3') {
            const yearsAsThrall = roll.roll('d6').result;
            eventResultString = `${weirdStuffResultString} ${yearsAsThrall} year(s).`;
          } else if (eventResult.secondaryTableResult === '4') {
            const prisonerMonths = roll.roll('d4').result;
            eventResultString = `${weirdStuffResultString} ${prisonerMonths} month(s) until adventurers killed it.`;
          } else if (eventResult.secondaryTableResult === '6') {
            const adventurerEmployer = createAdventurer();
            const fiftyPercentSupplemental = roll.roll('d2').result;
            let supplementalCharacterAlignmentString = '';

            if (adventurerEmployer.alignment === '3') {
              supplementalCharacterAlignmentString = fiftyPercentSupplemental === 1 ? 'chaotic evil' : 'chaotic neutral';
            } else if (adventurerEmployer.alignment === '1617') {
              supplementalCharacterAlignmentString = fiftyPercentSupplemental === 1 ? 'lawful good' : 'lawful neutral';
            } else if (adventurerEmployer.alignment === '18') {
              supplementalCharacterAlignmentString = fiftyPercentSupplemental === 1 ? 'chaotic good' : 'chaotic neutral';
            } else {
              supplementalCharacterAlignmentString = getState().getIn(['core', 'rollInfo', 'Supplemental Tables', 'Alignment', adventurerEmployer.alignment]).toLowerCase();
            }

            const supplementalCharacterRaceString = getState().getIn(['core', 'rollInfo', 'Supplemental Tables', 'Race', adventurerEmployer.race]).toLowerCase();
            const supplementalCharacterClassString = getState().getIn(['core', 'rollInfo', 'Supplemental Tables', 'Class', adventurerEmployer.class]).toLowerCase();
            const supplementalCharacterAttitudeString = getState().getIn(['core', 'rollInfo', 'Supplemental Tables', 'Attitude', adventurerEmployer.attitude]).toLowerCase();
            const supplementalCharacterStatusString = getState().getIn(['core', 'rollInfo', 'Supplemental Tables', 'Status', adventurerEmployer.status]).toLowerCase();
            const supplementalCharacterBackgroundString = adventurerEmployer.background.toLowerCase();
            const supplementalCharacterString = `Your employer was a ${supplementalCharacterRaceString} ${supplementalCharacterClassString}  with a(n) ${supplementalCharacterBackgroundString} background and a ${supplementalCharacterAlignmentString} alignment. This character is ${supplementalCharacterAttitudeString} towards you and is currently ${supplementalCharacterStatusString}.`;
            eventResultString = `${weirdStuffResultString} ${supplementalCharacterString}`;
          } else if (eventResult.secondaryTableResult === '7') {
            const yearsInsane = roll.roll('d6').result;
            eventResultString = `${weirdStuffResultString} ${yearsInsane} year(s) and recently regained your sanity. A tic or some other bit of odd behavior might linger.`;
          } else {
            eventResultString = `${weirdStuffResultString}`;
          }

          dispatch(actionCreators.eventResult({ lifeEvent: eventResultString, lifeEventId: i + 1 }));
        }

        if (eventResult.secondaryTable === 'War') {
          const secondaryTableResultString = getState().getIn(['core', 'rollInfo', 'Secondary Tables', eventResult.secondaryTable, eventResult.secondaryTableResult]);
          eventResultString = `${getState().getIn(['core', 'rollInfo', 'Life Events', 'Event', eventResult.outcome])} ${secondaryTableResultString}`;
          dispatch(actionCreators.eventResult({ lifeEvent: eventResultString, lifeEventId: i + 1 }));
        }
      }
    }
  };
}
