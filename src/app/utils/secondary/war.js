import Roll from 'roll';

export function war() {
  const roll = new Roll();
  const warRoll = roll.roll('d12');

  if (warRoll.result === 1) {
    return '1';
  }

  if (warRoll.result === 2 || warRoll.result === 3) {
    return '23';
  }

  if (warRoll.result === 4) {
    return '4';
  }

  if (warRoll.result >= 5 && warRoll.result <= 7) {
    return '57';
  }

  if (warRoll.result === 8 || warRoll.result === 9) {
    return '89';
  }

  if (warRoll.result === 10 || warRoll.result === 11) {
    return '1011';
  }

  if (warRoll.result === 12) {
    return '12';
  }
}
