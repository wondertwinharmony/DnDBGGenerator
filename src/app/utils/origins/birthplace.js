import Roll from 'roll';

export function birthplace() {
  const roll = new Roll();
  const birthplaceRoll = roll.roll('d100');

  if (birthplaceRoll.result >= 1 && birthplaceRoll.result <= 50) {
    return '0150';
  }

  if (birthplaceRoll.result >= 51 && birthplaceRoll.result <= 55) {
    return '5155';
  }

  if (birthplaceRoll.result >= 56 && birthplaceRoll.result <= 63) {
    return '5663';
  }

  if (birthplaceRoll.result === 64 || birthplaceRoll.result === 65) {
    return '6465';
  }

  if (birthplaceRoll.result >= 66 && birthplaceRoll.result <= 68) {
    return '6668';
  }

  if (birthplaceRoll.result === 69 || birthplaceRoll.result === 70) {
    return '6970';
  }

  if (birthplaceRoll.result === 71 || birthplaceRoll.result === 72) {
    return '7172';
  }

  if (birthplaceRoll.result === 73 || birthplaceRoll.result === 74) {
    return '7374';
  }

  if (birthplaceRoll.result >= 75 && birthplaceRoll.result <= 77) {
    return '7577';
  }

  if (birthplaceRoll.result === 78) {
    return '78';
  }

  if (birthplaceRoll.result === 79 || birthplaceRoll.result === 80) {
    return '7980';
  }

  if (birthplaceRoll.result === 81 || birthplaceRoll.result === 82) {
    return '8182';
  }

  if (birthplaceRoll.result === 83 || birthplaceRoll.result === 84) {
    return '8384';
  }

  if (birthplaceRoll.result === 85) {
    return '85';
  }

  if (birthplaceRoll.result >= 86 && birthplaceRoll.result <= 88) {
    return '8688';
  }

  if (birthplaceRoll.result >= 89 && birthplaceRoll.result <= 91) {
    return '8991';
  }

  if (birthplaceRoll.result === 92 || birthplaceRoll.result === 93) {
    return '8384';
  }

  if (birthplaceRoll.result === 94 || birthplaceRoll.result === 95) {
    return '9495';
  }

  if (birthplaceRoll.result === 96) {
    return '96';
  }

  if (birthplaceRoll.result === 97) {
    return '97';
  }

  if (birthplaceRoll.result === 98) {
    return '98';
  }

  if (birthplaceRoll.result === 99) {
    return '99';
  }

  if (birthplaceRoll.result === 100) {
    return '0';
  }
}
