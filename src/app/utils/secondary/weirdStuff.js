import Roll from 'roll';

export function weirdStuff() {
  const roll = new Roll();
  const weirdStuffRoll = roll.roll('d12');
  return weirdStuffRoll.result.toString();
}
