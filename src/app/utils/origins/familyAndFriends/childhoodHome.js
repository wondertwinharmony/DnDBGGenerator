import Roll from 'roll';

export function childhoodHome({ familyLifestyleModifier }) {
  const roll = new Roll();
  const childhoodHomeRoll = roll.roll('1d100');
  const childhoodHomeRollTotal = childhoodHomeRoll.result + familyLifestyleModifier;

  if (childhoodHomeRollTotal <= 0) {
    return '0';
  }

  if (childhoodHomeRollTotal >= 1 && childhoodHomeRollTotal <= 20) {
    return '120';
  }

  if (childhoodHomeRollTotal >= 21 && childhoodHomeRollTotal <= 30) {
    return '2130';
  }

  if (childhoodHomeRollTotal >= 31 && childhoodHomeRollTotal <= 40) {
    return '3140';
  }

  if (childhoodHomeRollTotal >= 41 && childhoodHomeRollTotal <= 50) {
    return '4150';
  }

  if (childhoodHomeRollTotal >= 51 && childhoodHomeRollTotal <= 70) {
    return '5170';
  }

  if (childhoodHomeRollTotal >= 71 && childhoodHomeRollTotal <= 90) {
    return '7190';
  }

  if (childhoodHomeRollTotal >= 91 && childhoodHomeRollTotal <= 110) {
    return '91110';
  }

  if (childhoodHomeRollTotal >= 111) {
    return '111';
  }
}
