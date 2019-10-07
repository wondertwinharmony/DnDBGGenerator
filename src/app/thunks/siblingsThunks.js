import * as actionCreators from '../actions/siblingsActionCreators.js';
import { numberOfSiblings } from '../utils/origins/numberOfSiblings.js';
import { alignment } from '../utils/supplemental/alignment.js';
import { occupation } from '../utils/supplemental/occupation.js';
import { status } from '../utils/supplemental/status.js';
import { attitude } from '../utils/supplemental/attitude.js';
import { supplementalClass } from '../utils/supplemental/supplementalClass.js';
import { birthOrder } from '../utils/origins/birthOrder.js';
import Roll from 'roll';

const roll = new Roll();

export function getSiblings(raceInput) {
  return function (dispatch, getState) {
    const numberOfSiblingsResults = numberOfSiblings(raceInput);
    dispatch(actionCreators.resetStore({}));
    dispatch(actionCreators.siblingsResult({ numberOfSiblings: numberOfSiblingsResults }));

    if (numberOfSiblingsResults >= 1) {
      const birthOrderArray = [];

      for (let i = 0; i < numberOfSiblingsResults; i++) {
        const birthOrderResult = birthOrder();
        birthOrderArray.push(birthOrderResult);

        const siblingsOccupation = occupation();
        const siblingsOccupationString = getState().getIn(['core', 'rollInfo', 'Supplemental Tables', 'Occupation', siblingsOccupation]);
        dispatch(actionCreators.siblingsOccupationResult({ siblingsOccupation: siblingsOccupationString, sibling: i + 1 }));

        const siblingsAlignment = alignment();
        let siblingsAlignmentString = '';
        const fiftyPercent = roll.roll('d2').result;

        if (siblingsAlignment === '3') {
          siblingsAlignmentString = fiftyPercent === 1 ? 'Chaotic evil' : 'Chaotic neutral';
        } else if (siblingsAlignment === '1617') {
          siblingsAlignmentString = fiftyPercent === 1 ? 'Lawful good' : 'Lawful neutral';
        } else if (siblingsAlignment === '18') {
          siblingsAlignmentString = fiftyPercent === 1 ? 'Chaotic good' : 'Chaotic neutral';
        } else {
          siblingsAlignmentString = getState().getIn(['core', 'rollInfo', 'Supplemental Tables', 'Alignment', siblingsAlignment]);
        }

        dispatch(actionCreators.siblingsAlignmentResult({ siblingsAlignment: siblingsAlignmentString, sibling: i + 1 }));

        const siblingsStatus = status();
        const siblingsStatusString = getState().getIn(['core', 'rollInfo', 'Supplemental Tables', 'Status', siblingsStatus]);
        dispatch(actionCreators.siblingsStatusResult({ siblingsStatus: siblingsStatusString, sibling: i + 1 }));

        const siblingsAttitude = attitude();
        const siblingsAttitudeString = getState().getIn(['core', 'rollInfo', 'Supplemental Tables', 'Attitude', siblingsAttitude]);
        dispatch(actionCreators.siblingsAttitudeResult({ siblingsAttitude: siblingsAttitudeString, sibling: i + 1 }));

        const siblingsClass = supplementalClass();
        const siblingsClassString = getState().getIn(['core', 'rollInfo', 'Supplemental Tables', 'Class', siblingsClass]);
        dispatch(actionCreators.siblingsClassResult({ siblingsClass: siblingsClassString, sibling: i + 1 }));
      }

      const checkForTwinsResult = function (arr, currentCount) {
        let count = 0 || currentCount;

        const countTwinsResult = function () {
          for (let i = 0; i < arr.length; i++) {
            if (arr[i] === '02' && count < 3) {
              count++;
            } else {
              const siblingsOrderAlternative = Math.floor(Math.random() * 12) + 3;
              arr[i] = siblingsOrderAlternative >= 8 && siblingsOrderAlternative <= 12 ? '812' : '37';
            }
            const siblingsBirthOrderString = getState().getIn(['core', 'rollInfo', 'Origins', 'Birth Order', arr[i]]);
            dispatch(actionCreators.siblingsBirthOrderResult({ siblingsBirthOrder: siblingsBirthOrderString, sibling: i + 1 }));
          }
          return count;
        };
        return countTwinsResult(arr);
      };
      checkForTwinsResult(birthOrderArray, 0);
    }
  };
}
