import Roll from 'roll';

export function birthOrder() {
  const roll = new Roll();
  const birthOrderRoll = roll.roll('d12');

  if (birthOrderRoll.result >= 0 && birthOrderRoll.result <= 2) {
    return '02';
  }

  if (birthOrderRoll.result >= 3 && birthOrderRoll.result <= 7) {
    return '37';
  }

  if (birthOrderRoll.result >= 8 && birthOrderRoll.result <= 12) {
    return '812';
  }
}
