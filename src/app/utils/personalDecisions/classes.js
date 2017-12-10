import Roll from 'roll';

export function classes(classesTitle) {
  const roll = new Roll();
  const classesRoll = roll.roll('d6');

  return ({ classesRoll: classesRoll.result.toString(), classesTitle });
};
