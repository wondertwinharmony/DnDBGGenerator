import Roll from 'roll';

export function alignment() {
  const roll = new Roll();
  const alignmentRoll = roll.roll('3d6');

  if (alignmentRoll.result === 3) {
    return '3';
  }

  if (alignmentRoll.result === 4 || alignmentRoll.result === 5) {
    return '45';
  }

  if (alignmentRoll.result >= 6 && alignmentRoll.result <= 8) {
    return '68';
  }

  if (alignmentRoll.result >= 9 && alignmentRoll.result <= 12) {
    return '912';
  }

  if (alignmentRoll.result >= 13 && alignmentRoll.result <= 15) {
    return '1315';
  }

  if (alignmentRoll.result === 16 || alignmentRoll.result === 17) {
    return '1617';
  }

  if (alignmentRoll.result === 18) {
    return '18';
  }
}
