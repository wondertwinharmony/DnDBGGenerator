import Roll from 'roll';

export function race() {
  const roll = new Roll();
  const raceRoll = roll.roll('d100');

  if (raceRoll.result >= 1 && raceRoll.result <= 40) {
    return '0140';
  }

  if (raceRoll.result >= 41 && raceRoll.result <= 50) {
    return '4150';
  }

  if (raceRoll.result >= 51 && raceRoll.result <= 60) {
    return '5160';
  }

  if (raceRoll.result >= 61 && raceRoll.result <= 70) {
    return '6170';
  }

  if (raceRoll.result >= 71 && raceRoll.result <= 75) {
    return '7175';
  }

  if (raceRoll.result >= 76 && raceRoll.result <= 80) {
    return '7680';
  }

  if (raceRoll.result >= 81 && raceRoll.result <= 85) {
    return '8185';
  }

  if (raceRoll.result >= 86 && raceRoll.result <= 90) {
    return '8690';
  }

  if (raceRoll.result >= 91 && raceRoll.result <= 95) {
    return '9195';
  }

  if (raceRoll.result >= 96 && raceRoll.result <= 100) {
    return '9600';
  }
}
