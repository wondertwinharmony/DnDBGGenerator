import Roll from 'roll';

export function halfOrcParents() {
  const roll = new Roll();
  const halfOrcParentsRoll = roll.roll('d8');

  if (halfOrcParentsRoll.result >= 1 && halfOrcParentsRoll.result <= 3) {
    return '13';
  }

  if (halfOrcParentsRoll.result === 4 || halfOrcParentsRoll.result === 5) {
    return '45';
  }

  if (halfOrcParentsRoll.result === 6 || halfOrcParentsRoll.result === 7) {
    return '67';
  }

  if (halfOrcParentsRoll.result === 8) {
    return '8';
  }
}
