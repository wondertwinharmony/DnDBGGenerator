import Roll from 'roll';

export function childhoodMemories(charismaModifier) {
  const roll = new Roll();
  const childhoodMemoriesRoll = roll.roll('3d6');
  const childhoodMemoriesTotal = childhoodMemoriesRoll.result + charismaModifier;

  if (childhoodMemoriesTotal.result <= 3) {
    return '3';
  }

  if (childhoodMemoriesTotal.result === 4 || childhoodMemoriesTotal.result === 5) {
    return '45';
  }

  if (childhoodMemoriesTotal.result >= 6 && childhoodMemoriesTotal.result <= 8) {
    return '68';
  }

  if (childhoodMemoriesTotal.result >= 9 && childhoodMemoriesTotal.result <= 12) {
    return '912';
  }

  if (childhoodMemoriesTotal.result >= 13 && childhoodMemoriesTotal.result <= 15) {
    return '1315';
  }

  if (childhoodMemoriesTotal.result === 16 || childhoodMemoriesTotal.result === 17) {
    return '1617';
  }

  if (childhoodMemoriesTotal.result >= 18) {
    return '18';
  }
};
