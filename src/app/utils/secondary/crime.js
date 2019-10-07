import Roll from 'roll';

export function crime() {
  const roll = new Roll();
  const crimeRoll = roll.roll('d8');

  return crimeRoll.result.toString();
}
