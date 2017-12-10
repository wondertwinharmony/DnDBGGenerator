import Roll from 'roll';

export function boon() {
  const roll = new Roll();
  const boonRoll = roll.roll('d12');
  
  if (boonRoll.result === 1 || boonRoll.result === 2) {
    return '012';
  }
  
  return boonRoll.result.toString();
};
