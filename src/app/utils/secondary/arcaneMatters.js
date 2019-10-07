import Roll from 'roll';

export function arcaneMatters() {
  const roll = new Roll();
  const arcaneMattersRoll = roll.roll('d10');

  return arcaneMattersRoll.result.toString();
}
