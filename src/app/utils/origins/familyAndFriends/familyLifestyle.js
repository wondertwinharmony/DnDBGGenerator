import Roll from 'roll';

export function familyLifestyle() {
  const roll = new Roll();
  const familyLifestyleRoll = roll.roll('3d6');

  if (familyLifestyleRoll.result === 3) {
    return { familyLifestyleResults: '3', familyLifestyleModifier: -40 };
  }

  if (familyLifestyleRoll.result === 4 || familyLifestyleRoll.result === 5) {
    return { familyLifestyleResults: '45', familyLifestyleModifier: -20 };
  }

  if (familyLifestyleRoll.result >= 6 && familyLifestyleRoll.result <= 8) {
    return { familyLifestyleResults: '68', familyLifestyleModifier: -10 };
  }

  if (familyLifestyleRoll.result >= 9 && familyLifestyleRoll.result <= 12) {
    return { familyLifestyleResults: '912', familyLifestyleModifier: 0 };
  }

  if (familyLifestyleRoll.result >= 13 && familyLifestyleRoll.result <= 15) {
    return { familyLifestyleResults: '1315', familyLifestyleModifier: 10 };
  }

  if (familyLifestyleRoll.result === 16 || familyLifestyleRoll.result === 17) {
    return { familyLifestyleResults: '1617', familyLifestyleModifier: 20 };
  }

  if (familyLifestyleRoll.result === 18) {
    return { familyLifestyleResults: '18', familyLifestyleModifier: 40 };
  }
}
