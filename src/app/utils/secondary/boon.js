import Roll from 'roll';

export function boon() {
  const roll = new Roll();
  const boonRoll = roll.roll('d10');
  
  return boonRoll.result.toString();
};
