import Roll from 'roll';

export function numberOfSiblings() {
  //TODO: race is hardcoded until we handle inputs
  const race = 'human';
  const roll = new Roll();
  const numberOfSiblingsRoll = roll.roll('d10');
  let numberOfSiblingsResultRoll;

  if (numberOfSiblingsRoll.result <= 2) {
    return 0;
  }

  if (numberOfSiblingsRoll.result === 3 || numberOfSiblingsRoll.result === 4) {
    numberOfSiblingsResultRoll = roll.roll('1d3');
  }

  if (numberOfSiblingsRoll.result === 5 || numberOfSiblingsRoll.result === 6) {
    numberOfSiblingsResultRoll = roll.roll('1d4+1');
  }

  if (numberOfSiblingsRoll.result === 7 || numberOfSiblingsRoll.result === 8) {
    numberOfSiblingsResultRoll = roll.roll('1d6+2');
  }

  if (numberOfSiblingsRoll.result === 9 || numberOfSiblingsRoll.result === 10) {
    numberOfSiblingsResultRoll = roll.roll('1d8+3');
  }

  return numberOfSiblingsResultRoll.result;
};
