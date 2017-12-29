import * as actionCreators from '../actions/personalDecisionsActionCreators.js';
import { background } from '../utils/personalDecisions/background.js';
import { classTraining } from '../utils/personalDecisions/classTraining.js';
import { supplementalClass } from '../utils/supplemental/supplementalClass.js';
import Immutable from 'immutable';

export function getPersonalDecisions(backgroundAndClassInput) {
  return function(dispatch, getState) {
    const backgroundResult = background(backgroundAndClassInput.background);
    const backgroundString = getState().getIn(['core', 'rollInfo', 'Personal Decisions', 'Background', backgroundResult.title, backgroundResult.backgroundRoll]);

    const classTrainingResult = classTraining(backgroundAndClassInput.characterClass);
    const classTitle = classTrainingResult.randomTitle ? getState().getIn(['core', 'rollInfo', 'Supplemental Tables', 'Class', classTrainingResult.randomTitle]) :
    classTrainingResult.title;

    const classTrainingString = getState().getIn(['core', 'rollInfo', 'Personal Decisions', 'Class', classTitle, classTrainingResult.classTrainingRoll]);

    dispatch(actionCreators.backgroundResult({ background: backgroundString }));
    dispatch(actionCreators.classTrainingResult({ classTraining: classTrainingString }));
  };
};
