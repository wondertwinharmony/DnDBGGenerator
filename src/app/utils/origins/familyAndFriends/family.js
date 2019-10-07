import Roll from 'roll';

export function family() {
  const roll = new Roll();
  const familyRoll = roll.roll('d100');

  if (familyRoll.result === 1) {
    return '1';
  }

  if (familyRoll.result === 2) {
    return '2';
  }

  if (familyRoll.result === 3) {
    return '3';
  }

  if (familyRoll.result === 4 || familyRoll.result === 5) {
    return '45';
  }

  if (familyRoll.result === 6 || familyRoll.result === 7) {
    return '67';
  }

  if (familyRoll.result >= 8 && familyRoll.result <= 15) {
    return '815';
  }

  if (familyRoll.result >= 16 && familyRoll.result <= 25) {
    return '1625';
  }

  if (familyRoll.result >= 26 && familyRoll.result <= 35) {
    return '2635';
  }

  if (familyRoll.result >= 36 && familyRoll.result <= 55) {
    return '3655';
  }

  if (familyRoll.result >= 56 && familyRoll.result <= 75) {
    return '5675';
  }

  if (familyRoll.result >= 76 && familyRoll.result <= 100) {
    return '7600';
  }
}
