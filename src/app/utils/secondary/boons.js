import Roll from 'roll';

export function boons() {
  const roll = new Roll();
  const boonsRoll = roll.roll('d10');

  return boonsRoll.result.toString();
}
