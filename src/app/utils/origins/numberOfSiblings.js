import Roll from 'roll';

export function numberOfSiblings() {
  const roll = new Roll();
  const numberOfSiblingsRoll = roll.roll('d10');

  if (numberOfSiblingsRoll.result >= 0 && numberOfSiblingsRoll.result <= 2) {
    return '02';
  }

  if (numberOfSiblingsRoll.result === 3 || numberOfSiblingsRoll.result === 4) {
    return '34';
  }

  if (numberOfSiblingsRoll.result === 5 || numberOfSiblingsRoll.result === 6) {
    return '56';
  }

  if (numberOfSiblingsRoll.result === 7 || numberOfSiblingsRoll.result === 8) {
    return '78';
  }

  if (numberOfSiblingsRoll.result === 9 || numberOfSiblingsRoll.result === 10) {
    return '910';
  }

};
