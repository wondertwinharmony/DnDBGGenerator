import Roll from 'roll';

export function class(classTitle) {
  const roll = new Roll();
  const classRoll = roll.roll('d6');
  
  return ({ classRoll: classRoll.result.toString(), classTitle });
};
