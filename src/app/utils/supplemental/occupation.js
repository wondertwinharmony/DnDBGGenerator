import Roll from 'roll';

export function occupation() {
  const roll = new Roll();
  const occupationRoll = roll.roll('d100');

  if (occupationRoll.result >= 1 && occupationRoll.result <= 5) {
    return '0105';
  }

  if (occupationRoll.result >= 6 && occupationRoll.result <= 10) {
    // TODO: call class table and return result here
    return '0610';
  }

  if (occupationRoll.result === 11) {
    return '11';
  }

  if (occupationRoll.result >= 12 && occupationRoll.result <= 26) {
    return '1226';
  }

  if (occupationRoll.result >= 27 && occupationRoll.result <= 31) {
    return '2731';
  }

  if (occupationRoll.result >= 32 && occupationRoll.result <= 36) {
    return '3236';
  }

  if (occupationRoll.result >= 37 && occupationRoll.result <= 38) {
    return '3738';
  }

  if (occupationRoll.result >= 39 && occupationRoll.result <= 43) {
    return '3943';
  }

  if (occupationRoll.result >= 44 && occupationRoll.result <= 55) {
    return '4455';
  }

  if (occupationRoll.result >= 56 && occupationRoll.result <= 60) {
    return '5660';
  }

  if (occupationRoll.result >= 61 && occupationRoll.result <= 75) {
    return '6175';
  }

  if (occupationRoll.result >= 76 && occupationRoll.result <= 80) {
    return '7680';
  }

  if (occupationRoll.result >= 81 && occupationRoll.result <= 85) {
    return '8185';
  }

  if (occupationRoll.result >= 86 && occupationRoll.result <= 90) {
    return '8690';
  }

  if (occupationRoll.result >= 91 && occupationRoll.result <= 95) {
    return '9195';
  }

  if (occupationRoll.result >= 96 && occupationRoll.result <= 100) {
    return '9600';
  }
}
