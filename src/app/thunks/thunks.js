import * as actionCreators from '../actions/exampleActionCreators.js';
import { numberOfSiblings } from '../utils/origins/numberOfSiblings.js';
import { parents } from '../utils/origins/parents.js';
import { alignment } from '../utils/supplemental/alignment.js';
import Immutable from 'immutable';

export function exampleThunk({ count }) {
  const resultNumberOfSiblings = numberOfSiblings();
  return function(dispatch, getState) {
    dispatch(actionCreators.incrementCounter({ count }));
  };
};

export function getParents() {
  return function(dispatch, getState) {
    const parentsResult = parents();
    console.log(parentsResult);
    const parentsString = getState().getIn(['example', 'rollInfo', 'Origins', 'Parents', parentsResult]);
    console.log('This parentsString: ', parentsString);
    const parentsOneAlignment = alignment();
    const parentsOneAlignmentString = getState().getIn(['example', 'rollInfo', 'Supplemental Tables', 'Alignment', parentsOneAlignment]);

    const parentsTwoAlignment = alignment();
    const parentsTwoAlignmentString = getState().getIn(['example', 'rollInfo', 'Supplemental Tables', 'Alignment', parentsTwoAlignment]);

    dispatch(actionCreators.parentsResult({ parents: parentsString }));
    dispatch(actionCreators.parentsAlignmentResult({ parentAlignment: parentsOneAlignmentString, parent: 1 }));
    dispatch(actionCreators.parentsAlignmentResult({ parentAlignment: parentsTwoAlignmentString, parent: 2 }));
  };
};
