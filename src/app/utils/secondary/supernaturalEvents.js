import Roll from 'roll';

export function supernaturalEvents() {
  const roll = new Roll();
  const supernaturalEventsRoll = roll.roll('d100');

  if (supernaturalEventsRoll.result >= 1 && supernaturalEventsRoll.result <= 5) {
    return '0105';
  }

  if (supernaturalEventsRoll.result >= 6 && supernaturalEventsRoll.result <= 10) {
    return '0610';
  }

  if (supernaturalEventsRoll.result >= 11 && supernaturalEventsRoll.result <= 15) {
    return '1115';
  }

  if (supernaturalEventsRoll.result >= 16 && supernaturalEventsRoll.result <= 20) {
    return '1620';
  }

  if (supernaturalEventsRoll.result >= 21 && supernaturalEventsRoll.result <= 30) {
    return '2130';
  }

  if (supernaturalEventsRoll.result >= 31 && supernaturalEventsRoll.result <= 40) {
    return '3140';
  }

  if (supernaturalEventsRoll.result >= 41 && supernaturalEventsRoll.result <= 50) {
    return '4150';
  }

  if (supernaturalEventsRoll.result >= 51 && supernaturalEventsRoll.result <= 60) {
    return '5160';
  }

  if (supernaturalEventsRoll.result >= 61 && supernaturalEventsRoll.result <= 70) {
    return '6170';
  }

  if (supernaturalEventsRoll.result >= 71 && supernaturalEventsRoll.result <= 75) {
    return '7175';
  }

  if (supernaturalEventsRoll.result >= 76 && supernaturalEventsRoll.result <= 80) {
    return '7680';
  }

  if (supernaturalEventsRoll.result >= 81 && supernaturalEventsRoll.result <= 85) {
    return '8185';
  }

  if (supernaturalEventsRoll.result >= 86 && supernaturalEventsRoll.result <= 90) {
    return '8690';
  }

  if (supernaturalEventsRoll.result >= 91 && supernaturalEventsRoll.result <= 95) {
    return '9195';
  }

  if (supernaturalEventsRoll.result >= 96 && supernaturalEventsRoll.result <= 100) {
    return '9600';
  }
}
