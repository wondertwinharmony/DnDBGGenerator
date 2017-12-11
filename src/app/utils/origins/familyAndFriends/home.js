import Roll from 'roll';

export function home({ familyLifestyleModifier }) {
  const roll = new Roll();
  const homeRoll = roll.roll('1d100');
  const homeRollTotal = homeRoll.result + familyLifestyleModifier;

  if (homeRollTotal <= 0) {
    return '0';
  }

  if (homeRollTotal >= 1 && homeRollTotal <= 20) {
    return '120';
  }

  if (homeRollTotal >= 21 && homeRollTotal <= 30) {
    return '2130';
  }

  if (homeRollTotal >= 31 && homeRollTotal <= 40) {
    return '3140';
  }

  if (homeRollTotal >= 41 && homeRollTotal <= 50) {
    return '4150';
  }

  if (homeRollTotal >= 51 && homeRollTotal <= 70) {
    return '5170';
  }

  if (homeRollTotal >= 71 && homeRollTotal <= 90) {
    return '7190';
  }

  if (homeRollTotal >= 91 && homeRollTotal <= 110) {
    return '91110';
  }

  if (homeRollTotal >= 111) {
    return '111';
  }
};
