import Roll from 'roll';
import { supplementalClass } from '../supplemental/supplementalClass.js';

export function classTraining(classTrainingTitle) {
  const roll = new Roll();
  const classTrainingRoll = roll.roll('d6');

  if (classTrainingTitle) {
    return ({ classTrainingRoll: classTrainingRoll.result.toString(), title: classTrainingTitle });
  } else {
    const randomClassResult = supplementalClass();
    return ({ classTrainingRoll: classTrainingRoll.result.toString(), randomTitle: randomClassResult });
  }
};
