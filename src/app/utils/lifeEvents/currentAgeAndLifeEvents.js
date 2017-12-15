import Roll from 'roll';

export function currentAgeAndLifeEvents(age) {
  const roll = new Roll();
  const currentAgeRoll = roll.roll('d100');
  const currentAge = age || currentAgeRoll.result;

  if (currentAge >= 0 && currentAge <= 20) {
    return { currentAge: '0120', lifeEventsNumber: 1 };
  }

  if (currentAge >= 21 && currentAge <= 59) {
    return { currentAge: '2159', lifeEventsNumber: roll.roll('1d4').result };
  }

  if (currentAge >= 60 && currentAge <= 69) {
    return { currentAge: '6069', lifeEventsNumber: roll.roll('1d6').result };
  }

  if (currentAge >= 70 && currentAge <= 89) {
    return { currentAge: '7089', lifeEventsNumber: roll.roll('1d8').result };
  }

  if (currentAge >= 90 && currentAge <= 99) {
    return { currentAge: '9099', lifeEventsNumber: roll.roll('1d10').result };
  }

  if (currentAge === 100) {
    return { currentAge: '0', lifeEventsNumber: roll.roll('1d12').result };
  }
};
