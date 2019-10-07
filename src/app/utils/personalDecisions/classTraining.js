import Roll from 'roll';
import { supplementalClass } from '../supplemental/supplementalClass.js';

export function classTraining(classInput) {
  const roll = new Roll();
  const classTrainingRoll = roll.roll('d6');

  if (classInput) {
    return ({ classTrainingRoll: classTrainingRoll.result.toString(), title: classInput });
  } else {
    const randomClassResult = supplementalClass();
    return ({ classTrainingRoll: classTrainingRoll.result.toString(), randomTitle: randomClassResult });
  }
}
