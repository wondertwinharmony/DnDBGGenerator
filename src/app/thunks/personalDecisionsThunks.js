import * as actionCreators from '../actions/personalDecisionsActionCreators.js';
import { background } from '../utils/personalDecisions/background.js';
import { classTraining } from '../utils/personalDecisions/classTraining.js';

export function getPersonalDecisions(backgroundClassRaceInput) {
  return function (dispatch, getState) {
    const backgroundResult = background(backgroundClassRaceInput.background);
    const backgroundString = getState().getIn(['core', 'rollInfo', 'Personal Decisions', 'Background', backgroundResult.title, backgroundResult.backgroundRoll]);
    const classTrainingResult = classTraining(backgroundClassRaceInput.characterClass);
    const classTitle = classTrainingResult.randomTitle ? getState().getIn(['core', 'rollInfo', 'Supplemental Tables', 'Class', classTrainingResult.randomTitle]) :
    classTrainingResult.title;

    dispatch(actionCreators.characterBackgroundResult({ characterBackground: backgroundResult.title }));
    dispatch(actionCreators.characterClassResult({ characterClass: classTitle }));
    dispatch(actionCreators.characterRaceResult({ characterRace: backgroundClassRaceInput.characterRace }));

    const classTrainingString = getState().getIn(['core', 'rollInfo', 'Personal Decisions', 'Class', classTitle, classTrainingResult.classTrainingRoll]);

    dispatch(actionCreators.backgroundResult({ background: backgroundString }));
    dispatch(actionCreators.classTrainingResult({ classTraining: classTrainingString }));
  };
}
