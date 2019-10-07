import Roll from 'roll';

export function childhoodMemories(charismaModifierInput) {
  const roll = new Roll();
  const childhoodMemoriesRoll = roll.roll('3d6').result;
  const charismaModifier = charismaModifierInput || 0;
  const childhoodMemoriesTotal = childhoodMemoriesRoll + charismaModifier;

  if (childhoodMemoriesTotal <= 3) {
    return '3';
  }

  if (childhoodMemoriesTotal === 4 || childhoodMemoriesTotal === 5) {
    return '45';
  }

  if (childhoodMemoriesTotal >= 6 && childhoodMemoriesTotal <= 8) {
    return '68';
  }

  if (childhoodMemoriesTotal >= 9 && childhoodMemoriesTotal <= 12) {
    return '912';
  }

  if (childhoodMemoriesTotal >= 13 && childhoodMemoriesTotal <= 15) {
    return '1315';
  }

  if (childhoodMemoriesTotal === 16 || childhoodMemoriesTotal === 17) {
    return '1617';
  }

  if (childhoodMemoriesTotal >= 18) {
    return '18';
  }
}
