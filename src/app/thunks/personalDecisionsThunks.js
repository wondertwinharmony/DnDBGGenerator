import * as actionCreators from '../actions/personalDecisionsActionCreators.js';
import { background } from '../utils/personalDecisions/background.js';
import { classTraining } from '../utils/personalDecisions/classTraining.js';
import Immutable from 'immutable';

export function getPersonalDecisions() {
  return function(dispatch, getState) {
    //TODO: background and classTraining hardcoded until inputs implemented
    const backgroundResult = background('Acolyte');
    const backgroundString = getState().getIn(['core', 'rollInfo', 'Personal Decisions', 'Background', backgroundResult.backgroundTitle, backgroundResult.backgroundRoll]);

    const classTrainingResult = classTraining('Barbarian');
    const classTrainingString = getState().getIn(['core', 'rollInfo', 'Personal Decisions', 'Class', classTrainingResult.classTrainingTitle, classTrainingResult.classTrainingRoll]);

    dispatch(actionCreators.backgroundResult({ background: backgroundString }));
    dispatch(actionCreators.classTrainingResult({ classTraining: classTrainingString }));
  };
};
