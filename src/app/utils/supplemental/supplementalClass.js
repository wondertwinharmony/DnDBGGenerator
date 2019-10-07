import Roll from 'roll';

export function supplementalClass() {
  const roll = new Roll();
  const supplementalClassRoll = roll.roll('d100');

  if (supplementalClassRoll.result >= 1 && supplementalClassRoll.result <= 7) {
    return '0107';
  }

  if (supplementalClassRoll.result >= 8 && supplementalClassRoll.result <= 14) {
    return '0814';
  }

  if (supplementalClassRoll.result >= 15 && supplementalClassRoll.result <= 29) {
    return '1529';
  }

  if (supplementalClassRoll.result >= 30 && supplementalClassRoll.result <= 36) {
    return '3036';
  }

  if (supplementalClassRoll.result >= 37 && supplementalClassRoll.result <= 52) {
    return '3752';
  }

  if (supplementalClassRoll.result >= 53 && supplementalClassRoll.result <= 58) {
    return '5358';
  }

  if (supplementalClassRoll.result >= 59 && supplementalClassRoll.result <= 64) {
    return '5964';
  }

  if (supplementalClassRoll.result >= 65 && supplementalClassRoll.result <= 70) {
    return '6570';
  }

  if (supplementalClassRoll.result >= 71 && supplementalClassRoll.result <= 84) {
    return '7184';
  }

  if (supplementalClassRoll.result >= 85 && supplementalClassRoll.result <= 89) {
    return '8589';
  }

  if (supplementalClassRoll.result >= 90 && supplementalClassRoll.result <= 94) {
    return '9094';
  }

  if (supplementalClassRoll.result >= 95 && supplementalClassRoll.result <= 100) {
    return '9500';
  }
}
