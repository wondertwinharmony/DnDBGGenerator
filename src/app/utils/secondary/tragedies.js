import Roll from 'roll';

export function tragedies() {
  const roll = new Roll();
  const tragediesRoll = roll.roll('d12');

  if (tragediesRoll.result === 1 || tragediesRoll.result === 2) {
    return '012';
  }

  return tragediesRoll.result.toString();
}
