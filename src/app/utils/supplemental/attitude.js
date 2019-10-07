import Roll from 'roll';

export function attitude() {
  const roll = new Roll();
  const attitudeRoll = roll.roll('3d4');

  if (attitudeRoll.result === 3 || attitudeRoll.result === 4) {
    return '34';
  }

  if (attitudeRoll.result >= 5 && attitudeRoll.result <= 10) {
    return '510';
  }

  if (attitudeRoll.result === 11 || attitudeRoll.result === 12) {
    return '1112';
  }
}
