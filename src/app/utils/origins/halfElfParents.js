import Roll from 'roll';

export function halfElfParents() {
  const roll = new Roll();
  const halfElfParentsRoll = roll.roll('d8');

  if (halfElfParentsRoll.result >= 1 && halfElfParentsRoll.result <= 5) {
    return '15';
  }

  if (halfElfParentsRoll.result === 6) {
    return '6';
  }

  if (halfElfParentsRoll.result === 7) {
    return '7';
  }

  if (halfElfParentsRoll.result === 8) {
    return '8';
  }
}
