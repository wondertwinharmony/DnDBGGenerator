import Roll from 'roll';

export function punishment() {
  const roll = new Roll();
  const punishmentRoll = roll.roll('d12');

  if (punishmentRoll.result >= 1 && punishmentRoll.result <= 3) {
    return '13';
  }

  if (punishmentRoll.result >= 4 && punishmentRoll.result <= 6) {
    return '46';
  }

  if (punishmentRoll.result >= 7 && punishmentRoll.result <= 8) {
    return '78';
  }

  if (punishmentRoll.result >= 9 && punishmentRoll.result <= 12) {
    return '912';
  }
}
