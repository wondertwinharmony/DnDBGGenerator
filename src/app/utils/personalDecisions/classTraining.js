import Roll from 'roll';

export function classTraining(classTrainingTitle) {
  const roll = new Roll();
  const classTrainingRoll = roll.roll('d6');

  return ({ classTrainingRoll: classTrainingRoll.result.toString(), classTrainingTitle });
};
