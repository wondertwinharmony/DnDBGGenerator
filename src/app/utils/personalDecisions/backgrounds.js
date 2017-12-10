import Roll from 'roll';

export function background(backgroundTitle) {
  const roll = new Roll();
  const backgroundRoll = roll.roll('d6');
  
  return ({ backgroundRoll: backgroundRoll.result.toString(), backgroundTitle });
};
