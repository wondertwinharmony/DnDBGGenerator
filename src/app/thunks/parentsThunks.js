import * as actionCreators from '../actions/parentsActionCreators.js';
import { parents } from '../utils/origins/parents.js';
import { alignment } from '../utils/supplemental/alignment.js';
import { birthplace } from '../utils/origins/birthplace.js';
import { occupation } from '../utils/supplemental/occupation.js';
import { parentsRace } from '../utils/origins/parentsRace.js';
import { supplementalClass } from '../utils/supplemental/supplementalClass.js';
import Roll from 'roll';

const roll = new Roll();

export function getParents(raceInput) {
  return function (dispatch, getState) {
    const parentsResult = parents();
    const parentsString = getState().getIn(['core', 'rollInfo', 'Origins', 'Parents', parentsResult]);

    const birthplaceResult = birthplace();
    const birthplaceString = getState().getIn(['core', 'rollInfo', 'Origins', 'Birthplace', birthplaceResult]);

    const parentsRaceResult = parentsRace(raceInput);
    const parentsRaceResultString = getState().getIn(['core', 'rollInfo', 'Origins', raceInput + ' Parents', parentsRaceResult]) || `Your parents were both of the ${raceInput} race.`;

    const parentsOneAlignment = alignment();
    const fiftyPercentOne = roll.roll('d2').result;
    let parentsOneAlignmentString = '';

    if (parentsOneAlignment === '3') {
      parentsOneAlignmentString = fiftyPercentOne === 1 ? 'Chaotic evil' : 'Chaotic neutral';
    } else if (parentsOneAlignment === '1617') {
      parentsOneAlignmentString = fiftyPercentOne === 1 ? 'Lawful good' : 'Lawful neutral';
    } else if (parentsOneAlignment === '18') {
      parentsOneAlignmentString = fiftyPercentOne === 1 ? 'Chaotic good' : 'Chaotic neutral';
    } else {
      parentsOneAlignmentString = getState().getIn(['core', 'rollInfo', 'Supplemental Tables', 'Alignment', parentsOneAlignment]);
    }

    const parentsOneOccupation = occupation();
    const parentsOneOccupationString = getState().getIn(['core', 'rollInfo', 'Supplemental Tables', 'Occupation', parentsOneOccupation]);

    const parentsOneClass = supplementalClass();
    const parentsOneClassString = getState().getIn(['core', 'rollInfo', 'Supplemental Tables', 'Class', parentsOneClass]);

    const parentsTwoAlignment = alignment();
    const fiftyPercentTwo = roll.roll('d2').result;
    let parentsTwoAlignmentString = '';

    if (parentsTwoAlignment === '3') {
      parentsTwoAlignmentString = fiftyPercentTwo === 1 ? 'Chaotic evil' : 'Chaotic neutral';
    } else if (parentsTwoAlignment === '1617') {
      parentsTwoAlignmentString = fiftyPercentTwo === 1 ? 'Lawful good' : 'Lawful neutral';
    } else if (parentsTwoAlignment === '18') {
      parentsTwoAlignmentString = fiftyPercentTwo === 1 ? 'Chaotic good' : 'Chaotic neutral';
    } else {
      parentsTwoAlignmentString = getState().getIn(['core', 'rollInfo', 'Supplemental Tables', 'Alignment', parentsTwoAlignment]);
    }

    const parentsTwoOccupation = occupation();
    const parentsTwoOccupationString = getState().getIn(['core', 'rollInfo', 'Supplemental Tables', 'Occupation', parentsTwoOccupation]);

    const parentsTwoClass = supplementalClass();
    const parentsTwoClassString = getState().getIn(['core', 'rollInfo', 'Supplemental Tables', 'Class', parentsTwoClass]);

    dispatch(actionCreators.parentsResult({ parents: parentsString }));
    dispatch(actionCreators.birthplaceResult({ birthplace: birthplaceString }));
    dispatch(actionCreators.parentsRaceResult({ parentsRace: parentsRaceResultString }));

    dispatch(actionCreators.parentsAlignmentResult({ parentAlignment: parentsOneAlignmentString, parent: 1 }));
    dispatch(actionCreators.parentsOccupationResult({ parentOccupation: parentsOneOccupationString, parent: 1 }));
    dispatch(actionCreators.parentsClassResult({ parentClass: parentsOneClassString, parent: 1 }));

    dispatch(actionCreators.parentsAlignmentResult({ parentAlignment: parentsTwoAlignmentString, parent: 2 }));
    dispatch(actionCreators.parentsOccupationResult({ parentOccupation: parentsTwoOccupationString, parent: 2 }));
    dispatch(actionCreators.parentsClassResult({ parentClass: parentsTwoClassString, parent: 2 }));
  };
}
