import Roll from 'roll';

export function parents() {
  const roll = new Roll();
  const parentsRoll = roll.roll('d100');

  if (parentsRoll.result >= 1 && parentsRoll.result < 96) {
    return '0195';
  }

  if (parentsRoll.result > 95 && parentsRoll.result <= 100) {
    return '9600';
  }
}
