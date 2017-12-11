import Roll from 'roll';

export function class() {
  const roll = new Roll();
  const classRoll = roll.roll('d100');

  if (classRoll.result >= 1 && classRoll.result <= 7) {
    return '0107';
  }
  
  if (classRoll.result >= 8 && classRoll.result <= 14) {
    return '0814';
  }
  
  if (classRoll.result >= 15 && classRoll.result <= 29) {
    return '1529';
  }
  
  if (classRoll.result >= 30 && classRoll.result <= 36) {
    return '3036';
  }
  
  if (classRoll.result >= 37 && classRoll.result <= 52) {
    return '3752';
  }
  
  if (classRoll.result >= 53 && classRoll.result <= 58) {
    return '5358';
  }
  
  if (classRoll.result >= 59 && classRoll.result <= 64) {
    return '5964';
  }
  
  if (classRoll.result >= 65 && classRoll.result <= 70) {
    return '6570';
  }
  
  if (classRoll.result >= 71 && classRoll.result <= 84) {
    return '7184';
  }
  
  if (classRoll.result >= 85 && classRoll.result <= 89) {
    return '8589';
  }
  
  if (classRoll.result >= 90 && classRoll.result <= 94) {
    return '9094';
  }
  
  if (classRoll.result >= 95 && classRoll.result <= 100) {
    return '9500';
  }
};
