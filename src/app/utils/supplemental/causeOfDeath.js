import Roll from 'roll';

export function causeOfDeath() {
  const roll = new Roll();
  const causeOfDeathRoll = roll.roll('d12');

  return causeOfDeathRoll.result.toString();
}
