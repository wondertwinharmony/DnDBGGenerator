import * as actionCreators from '../actions/familyAndFriendsActionCreators.js';
import { family } from '../utils/origins/familyAndFriends/family.js';
import { absentParentFate } from '../utils/origins/familyAndFriends/absentParentFate.js';
import { familyLifestyle } from '../utils/origins/familyAndFriends/familyLifestyle.js';
import { childhoodHome } from '../utils/origins/familyAndFriends/childhoodHome.js';
import { childhoodMemories } from '../utils/origins/familyAndFriends/childhoodMemories.js';
import { alignment } from '../utils/supplemental/alignment.js';
import { occupation } from '../utils/supplemental/occupation.js';
import { attitude } from '../utils/supplemental/attitude.js';
import { race } from '../utils/supplemental/race.js';
import { supplementalClass } from '../utils/supplemental/supplementalClass.js';
import { causeOfDeath } from '../utils/supplemental/causeOfDeath.js';
import Roll from 'roll';

const roll = new Roll();

export function getFamilyAndFriends(charismaModifierInput) {
  return function (dispatch, getState) {
    const familyResult = family();
    const familyString = getState().getIn(['core', 'rollInfo', 'Origins', 'Family and Friends', 'Family', familyResult]);
    dispatch(actionCreators.familyResult({ family: { familyString, familyKey: familyResult } }));

    const absentParentFateOneResult = absentParentFate();
    const absentParentFateTwoResult = absentParentFate();

    if (absentParentFateOneResult === '1') {
      const absentParentOneDeathResult = causeOfDeath();
      const absentParentOneDeathString = `Your parent died. The cause of death was ${getState().getIn(['core', 'rollInfo', 'Supplemental Tables', 'Cause of Death', absentParentOneDeathResult])}`;
      dispatch(actionCreators.absentParentFateResult({ absentParentFate: absentParentOneDeathString, parent: 1 }));
    } else {
      const absentParentFateOneString = getState().getIn(['core', 'rollInfo', 'Origins', 'Family and Friends', 'Absent Parent Fate', absentParentFateOneResult]);
      dispatch(actionCreators.absentParentFateResult({ absentParentFate: absentParentFateOneString, parent: 1 }));
    }

    if (absentParentFateTwoResult === '1') {
      const absentParentTwoDeathResult = causeOfDeath();
      const absentParentTwoDeathString = `Your parent died. The cause of death was ${getState().getIn(['core', 'rollInfo', 'Supplemental Tables', 'Cause of Death', absentParentTwoDeathResult])}`;
      dispatch(actionCreators.absentParentFateResult({ absentParentFate: absentParentTwoDeathString, parent: 2 }));
    } else {
      const absentParentFateTwoString = getState().getIn(['core', 'rollInfo', 'Origins', 'Family and Friends', 'Absent Parent Fate', absentParentFateTwoResult]);
      dispatch(actionCreators.absentParentFateResult({ absentParentFate: absentParentFateTwoString, parent: 2 }));
    }

    const childhoodHomeResult = childhoodHome(familyLifestyle());
    const childhoodHomeString = getState().getIn(['core', 'rollInfo', 'Origins', 'Family and Friends', 'Childhood Home', childhoodHomeResult]);
    dispatch(actionCreators.childhoodHomeResult({ childhoodHome: childhoodHomeString }));

    const childhoodMemoriesResult = childhoodMemories(charismaModifierInput);
    const childhoodMemoriesString = getState().getIn(['core', 'rollInfo', 'Origins', 'Family and Friends', 'Childhood Memories', childhoodMemoriesResult]);
    dispatch(actionCreators.childhoodMemoriesResult({ childhoodMemories: childhoodMemoriesString }));

    const familyOccupation = occupation();
    const familyOccupationString = getState().getIn(['core', 'rollInfo', 'Supplemental Tables', 'Occupation', familyOccupation]);
    dispatch(actionCreators.familyOccupationResult({ familyOccupation: familyOccupationString }));

    const familyAlignment = alignment();
    const fiftyPercent = roll.roll('d2').result;
    let familyAlignmentString = '';

    if (familyAlignment === '3') {
      familyAlignmentString = fiftyPercent === 1 ? 'Chaotic evil' : 'Chaotic neutral';
    } else if (familyAlignment === '1617') {
      familyAlignmentString = fiftyPercent === 1 ? 'Lawful good' : 'Lawful neutral';
    } else if (familyAlignment === '18') {
      familyAlignmentString = fiftyPercent === 1 ? 'Chaotic good' : 'Chaotic neutral';
    } else {
      familyAlignmentString = getState().getIn(['core', 'rollInfo', 'Supplemental Tables', 'Alignment', familyAlignment]);
    }

    dispatch(actionCreators.familyAlignmentResult({ familyAlignment: familyAlignmentString }));

    const raceResult = race();
    const raceString = getState().getIn(['core', 'rollInfo', 'Supplemental Tables', 'Race', raceResult]);
    dispatch(actionCreators.raceResult({ race: raceString }));

    const familyAttitude = attitude();
    const familyAttitudeString = getState().getIn(['core', 'rollInfo', 'Supplemental Tables', 'Attitude', familyAttitude]);
    dispatch(actionCreators.familyAttitudeResult({ familyAttitude: familyAttitudeString }));

    const familyClass = supplementalClass();
    const familyClassString = getState().getIn(['core', 'rollInfo', 'Supplemental Tables', 'Class', familyClass]);
    dispatch(actionCreators.familyClassResult({ familyClass: familyClassString }));
  };
}
