import Roll from 'roll';

export function numberOfSiblings(raceInput) {
  const roll = new Roll();
  const numberOfSiblingsRoll = roll.roll('d10').result;
  const numberOfSiblingsRollResult = (raceInput === 'Dwarf' || raceInput === 'Elf') ? numberOfSiblingsRoll - 2 : numberOfSiblingsRoll;
  let numberOfSiblingsResultRoll;

  if (numberOfSiblingsRollResult <= 2) {
    return 0;
  }

  if (numberOfSiblingsRollResult === 3 || numberOfSiblingsRollResult === 4) {
    numberOfSiblingsResultRoll = roll.roll('1d3').result;
  }

  if (numberOfSiblingsRollResult === 5 || numberOfSiblingsRollResult === 6) {
    numberOfSiblingsResultRoll = roll.roll('1d4+1').result;
  }

  if (numberOfSiblingsRollResult === 7 || numberOfSiblingsRollResult === 8) {
    numberOfSiblingsResultRoll = roll.roll('1d6+2').result;
  }

  if (numberOfSiblingsRollResult === 9 || numberOfSiblingsRollResult === 10) {
    numberOfSiblingsResultRoll = roll.roll('1d8+3').result;
  }

  return numberOfSiblingsResultRoll;
}
