import Roll from 'roll';

export function magicalEvent() {
  const roll = new Roll();
  const magicalEventRoll = roll.roll('d10');
  
  return magicalEventRoll.result.toString();
};
