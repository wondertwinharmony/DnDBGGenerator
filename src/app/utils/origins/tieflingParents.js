import Roll from 'roll';

export function tieflingParents() {
  const roll = new Roll();
  const tieflingParentsRoll = roll.roll('d8');

  if (tieflingParentsRoll.result >= 1 && tieflingParentsRoll.result <= 4) {
    return '14';
  }

  if (tieflingParentsRoll.result === 5 || tieflingParentsRoll.result === 6) {
    return '56';
  }

  if (tieflingParentsRoll.result === 7) {
    return '7';
  }

  if (tieflingParentsRoll.result === 8) {
    return '8';
  }
}
