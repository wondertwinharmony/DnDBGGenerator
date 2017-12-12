import * as actionCreators from '../actions/parentsActionCreators.js';
import { numberOfSiblings } from '../utils/origins/numberOfSiblings.js';
import { parents } from '../utils/origins/parents.js';
import { alignment } from '../utils/supplemental/alignment.js';
import { occupation } from '../utils/supplemental/occupation.js';
import { supplementalClass } from '../utils/supplemental/supplementalClass.js';
import Immutable from 'immutable';

export function getParents() {
  return function(dispatch, getState) {
    const parentsResult = parents();
    const parentsString = getState().getIn(['core', 'rollInfo', 'Origins', 'Parents', parentsResult]);

    const parentsOneAlignment = alignment();
    const parentsOneAlignmentString = getState().getIn(['core', 'rollInfo', 'Supplemental Tables', 'Alignment', parentsOneAlignment]);

    const parentsOneOccupation = occupation();
    const parentsOneOccupationString = getState().getIn(['core', 'rollInfo', 'Supplemental Tables', 'Occupation', parentsOneOccupation]);

    const parentsOneClass = supplementalClass();
    const parentsOneClassString = getState().getIn(['core', 'rollInfo', 'Supplemental Tables', 'Class', parentsOneClass]);

    const parentsTwoAlignment = alignment();
    const parentsTwoAlignmentString = getState().getIn(['core', 'rollInfo', 'Supplemental Tables', 'Alignment', parentsTwoAlignment]);

    const parentsTwoOccupation = occupation();
    const parentsTwoOccupationString = getState().getIn(['core', 'rollInfo', 'Supplemental Tables', 'Occupation', parentsTwoOccupation]);

    const parentsTwoClass = supplementalClass();
    const parentsTwoClassString = getState().getIn(['core', 'rollInfo', 'Supplemental Tables', 'Class', parentsTwoClass]);

    dispatch(actionCreators.parentsResult({ parents: parentsString }));

    dispatch(actionCreators.parentsAlignmentResult({ parentAlignment: parentsOneAlignmentString, parent: 1 }));
    dispatch(actionCreators.parentsOccupationResult({ parentOccupation: parentsOneOccupationString, parent: 1 }));
    dispatch(actionCreators.parentsClassResult({ parentClass: parentsOneClassString, parent: 1 }));

    dispatch(actionCreators.parentsAlignmentResult({ parentAlignment: parentsTwoAlignmentString, parent: 2 }));
    dispatch(actionCreators.parentsOccupationResult({ parentOccupation: parentsTwoOccupationString, parent: 2 }));
    dispatch(actionCreators.parentsClassResult({ parentClass: parentsTwoClassString, parent: 2 }));
  };
};
