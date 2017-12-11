import Roll from 'roll';

export function adventures() {
  const roll = new Roll();
  const adventuresRoll = roll.roll('d100');

  if (adventuresRoll.result >= 1 && adventuresRoll.result <= 10) {
    return '0110';
  }

  if (adventuresRoll.result >= 11 && adventuresRoll.result <= 20) {
    return '1120';
  }
  
  if (adventuresRoll.result >= 21 && adventuresRoll.result <= 30) {
    return '2130';
  }
  
  if (adventuresRoll.result >= 31 && adventuresRoll.result <= 40) {
    return '3140';
  }
  
  if (adventuresRoll.result >= 41 && adventuresRoll.result <= 50) {
    return '4150';
  }
  
  if (adventuresRoll.result >= 51 && adventuresRoll.result <= 60) {
    return '5160';
  }
  
  if (adventuresRoll.result >= 61 && adventuresRoll.result <= 70) {
    return '6170';
  }
  
  if (adventuresRoll.result >= 71 && adventuresRoll.result <= 80) {
    return '7180';
  }
  
  if (adventuresRoll.result >= 81 && adventuresRoll.result <= 90) {
    return '8190';
  }
  
  if (adventuresRoll.result >= 91 && adventuresRoll.result <= 99) {
    return '9199';
  }
  
  if (adventuresRoll.result === 0) {
    return '0';
  }
};
