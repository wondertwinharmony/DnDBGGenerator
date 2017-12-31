import Roll from 'roll';

export function adventures() {
  const roll = new Roll();
  const adventuresRoll = roll.roll('d100');

  if (adventuresRoll.result >= 1 && adventuresRoll.result <= 10) {
    const fingersMissing = Math.floor(Math.random() * 3) + 1;
    const toesMissing = roll.roll('1d4').result;
    const injury = {
      1: 'you are missing an ear.',
      2: `you are missing ${fingersMissing} finger(s).`,
      3: `you are missing ${toesMissing} toe(s).`,
    };

    const injuryRoll = Math.floor(Math.random() * 3) + 1;
    const injuryResult = injury[injuryRoll];

    return{ id: '0110', secondaryRollString: injuryResult};
  }

  if (adventuresRoll.result >= 11 && adventuresRoll.result <= 20) {
    return{ id: '1120', secondaryRollString: ''};
  }

  if (adventuresRoll.result >= 21 && adventuresRoll.result <= 30) {
    return{ id: '2130', secondaryRollString: ''};
  }

  if (adventuresRoll.result >= 31 && adventuresRoll.result <= 40) {
    return{ id: '3140', secondaryRollString: ''};
  }

  if (adventuresRoll.result >= 41 && adventuresRoll.result <= 50) {
    return{ id: '4150', secondaryRollString: ''};
  }

  if (adventuresRoll.result >= 51 && adventuresRoll.result <= 60) {
    return{ id: '5160', secondaryRollString: ''};
  }

  if (adventuresRoll.result >= 61 && adventuresRoll.result <= 70) {
    return{ id: '6170', secondaryRollString: ''};
  }

  if (adventuresRoll.result >= 71 && adventuresRoll.result <= 80) {
    return{ id: '7180', secondaryRollString: ''};
  }

  if (adventuresRoll.result >= 81 && adventuresRoll.result <= 90) {
    const treasureShare = roll.roll('2d6').result;
    return{ id: '8190', secondaryRollString: `Ypu have ${treasureShare} gp left from your share of it.` };
  }

  if (adventuresRoll.result >= 91 && adventuresRoll.result <= 99) {
    const treasureShare = roll.roll('1d20+50').result;
    return{ id: '9199', secondaryRollString: `You have ${treasureShare} gp left from your share of it.` };
  }

  if (adventuresRoll.result === 0) {
    return{ id: '0', secondaryRollString: ''};
  }
};
