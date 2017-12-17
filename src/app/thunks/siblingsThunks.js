import * as actionCreators from '../actions/siblingsActionCreators.js';
import { numberOfSiblings } from '../utils/origins/numberOfSiblings.js';
import { birthOrder } from '../utils/origins/birthOrder.js';
import { alignment } from '../utils/supplemental/alignment.js';
import { occupation } from '../utils/supplemental/occupation.js';
import { status } from '../utils/supplemental/status.js';
import { attitude } from '../utils/supplemental/attitude.js';
import { supplementalClass } from '../utils/supplemental/supplementalClass.js';
import Immutable from 'immutable';

export function getSiblings() {
  return function(dispatch, getState) {
    const numberOfSiblingsResults = numberOfSiblings();

    dispatch(actionCreators.resetStore({}));
    dispatch(actionCreators.siblingsResult({ numberOfSiblings: numberOfSiblingsResults }));

    // if (numberOfSiblingsResults >= 1) {
    //   let birthOrderCount = 0;
    //   let siblingsBirthOrder = birthOrder();
    //   siblingsBirthOrder = '02'
    //   if (siblingsBirthOrder === '02' && birthOrderCount < 3 ) {
    //     birthOrderCount + 1;
    //   } else {
    //     const siblingsBirthDeterminer = Math.floor(Math.random() * 12) + 3;
    //     siblingsBirthOrder === siblingsBirthDeterminer >= 8 && siblingsBirthDeterminer <= 12 ? '812' : '37';
    //   }
    //
    //   const siblingsBirthOrderString = getState().getIn(['core', 'rollInfo', 'Origins', 'Birth Order', siblingsBirthOrder]);
    //   dispatch(actionCreators.siblingsBirthOrderResult({ siblingsBirthOrder: siblingsBirthOrderString, sibling: i+1 }));

      const getSiblingsBirthOrder = (numberOfSiblingsResults) => {
        let birthOrderCount = 0;
        let siblingsBirthOrder = birthOrder();
        siblingsBirthOrder = '02'

        for (let i = 0; i < numberOfSiblingsResults; i++) {
          if (siblingsBirthOrder === '02' && birthOrderCount < 3 ) {
            birthOrderCount + 1;
          } else {
            const siblingsBirthDeterminer = Math.floor(Math.random() * 12) + 3;
            siblingsBirthOrder === siblingsBirthDeterminer >= 8 && siblingsBirthDeterminer <= 12 ? '812' : '37';
          }
          const siblingsBirthOrderString = getState().getIn(['core', 'rollInfo', 'Origins', 'Birth Order', siblingsBirthOrder]);
          dispatch(actionCreators.siblingsBirthOrderResult({ siblingsBirthOrder: siblingsBirthOrderString, sibling: i+1 }));
        }
        return birthOrderCount;
      };

      getSiblingsBirthOrder(numberOfSiblingsResults);

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
