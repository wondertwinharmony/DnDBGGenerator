import * as actionCreators from '../actions/siblingsActionCreators.js';
import { numberOfSiblings } from '../utils/origins/numberOfSiblings.js';
import { alignment } from '../utils/supplemental/alignment.js';
import { occupation } from '../utils/supplemental/occupation.js';
import { status } from '../utils/supplemental/status.js';
import { attitude } from '../utils/supplemental/attitude.js';
import { supplementalClass } from '../utils/supplemental/supplementalClass.js';
import Immutable from 'immutable';

export function getSiblings() {
  return function(dispatch, getState) {
    // const parentsResult = parents();
    // const parentsString = getState().getIn(['example', 'rollInfo', 'Origins', 'Parents', parentsResult]);
    //
    // dispatch(actionCreators.parentsResult({ parents: parentsString }));

    const numberOfSiblingsResults = numberOfSiblings();

    dispatch(actionCreators.resetStore({}));
    dispatch(actionCreators.siblingsResult({ numberOfSiblings: numberOfSiblingsResults }));

    if (numberOfSiblingsResults >= 1) {
      for (let i = 0; i < numberOfSiblingsResults; i++){
        const siblingsOccupation = occupation();
        const siblingsOccupationString = getState().getIn(['core', 'rollInfo', 'Supplemental Tables', 'Occupation', siblingsOccupation]);
        dispatch(actionCreators.siblingsOccupationResult({ siblingsOccupation: siblingsOccupationString, sibling: i+1 }));

        const siblingsAlignment = alignment();
        const siblingsAlignmentString = getState().getIn(['core', 'rollInfo', 'Supplemental Tables', 'Alignment', siblingsAlignment]);
        dispatch(actionCreators.siblingsAlignmentResult({ siblingsAlignment: siblingsAlignmentString, sibling: i+1 }));

        const siblingsStatus = status();
        const siblingsStatusString = getState().getIn(['core', 'rollInfo', 'Supplemental Tables', 'Status', siblingsStatus]);
        dispatch(actionCreators.siblingsStatusResult({ siblingsStatus: siblingsStatusString, sibling: i+1 }));

        const siblingsAttitude = attitude();
        const siblingsAttitudeString = getState().getIn(['core', 'rollInfo', 'Supplemental Tables', 'Attitude', siblingsAttitude]);
        dispatch(actionCreators.siblingsAttitudeResult({ siblingsAttitude: siblingsAttitudeString, sibling: i+1 }));

        const siblingsClass = supplementalClass();
        const siblingsClassString = getState().getIn(['core', 'rollInfo', 'Supplemental Tables', 'Class', siblingsClass]);
        dispatch(actionCreators.siblingsClassResult({ siblingsClass: siblingsClassString, sibling: i+1 }));
      }
    }
  };
};
