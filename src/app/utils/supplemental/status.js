import Roll from 'roll';

export function status() {
  const roll = new Roll();
  const statusRoll = roll.roll('3d6');

  if (statusRoll.result === 3) {
    return '3';
  }

  if (statusRoll.result === 4 || statusRoll.result === 5) {
    return '45';
  }

  if (statusRoll.result >= 6 && statusRoll.result <= 8) {
    return '68';
  }

  if (statusRoll.result >= 9 && statusRoll.result <= 12) {
    return '912';
  }

  if (statusRoll.result >= 13 && statusRoll.result <= 15) {
    return '1315';
  }

  if (statusRoll.result >= 16 && statusRoll.result <= 17) {
    return '1617';
  }

  if (statusRoll.result === 18) {
    return '18';
  }
}
