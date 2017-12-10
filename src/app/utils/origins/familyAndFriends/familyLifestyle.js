import Roll from 'roll';

export function familyLifestyle() {
  const roll = new Roll();
  const familyLifestyleRoll = roll.roll('3d6');

  if (familyLifestyleRoll.result === 3) {
    return '3';
  }

  if (familyLifestyleRoll.result === 4 || familyLifestyleRoll.result === 5) {
    return '37';
  }

  if (familyLifestyleRoll.result >= 6 && familyLifestyleRoll.result <= 8) {
    return '68';
  }

  if (familyLifestyleRoll.result >= 9 && familyLifestyleRoll.result <= 12) {
    return '912';
  }

  if (familyLifestyleRoll.result >= 13 && familyLifestyleRoll.result <= 15) {
    return '1315';
  }

  if (familyLifestyleRoll.result === 16 || familyLifestyleRoll.result === 17) {
    return '1617';
  }

  if (familyLifestyleRoll.result === 18) {
    return '18';
  }
};
