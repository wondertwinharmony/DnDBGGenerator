import Roll from 'roll';

export function absentParentFate() {
  const roll = new Roll();
  const absentParentFateRoll = roll.roll('d4');

  return absentParentFateRoll.result.toString();
}
