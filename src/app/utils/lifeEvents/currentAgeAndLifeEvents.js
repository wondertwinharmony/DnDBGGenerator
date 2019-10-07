import Roll from 'roll';

export function currentAgeAndLifeEvents(ageInput) {
  const roll = new Roll();
  let currentAge;
  let currentAgeRoll = { result: false };

  if (ageInput) {
    currentAge = ageInput;
  } else {
    currentAgeRoll = roll.roll('d100').result;
  }

  if ((currentAge >= 61) || (currentAgeRoll === 100)) {
    return { currentAge: '0', lifeEventsNumber: roll.roll('1d12').result };
  }

  if ((currentAge >= 51 && currentAge <= 60) || (currentAgeRoll >= 90 && currentAgeRoll <= 99)) {
    return { currentAge: '9099', lifeEventsNumber: roll.roll('1d10').result };
  }

  if ((currentAge >= 41 && currentAge <= 50) || (currentAgeRoll >= 70 && currentAgeRoll <= 89)) {
    return { currentAge: '7089', lifeEventsNumber: roll.roll('1d8').result };
  }

  if ((currentAge >= 31 && currentAge <= 40) || (currentAgeRoll >= 60 && currentAgeRoll <= 69)) {
    return { currentAge: '6069', lifeEventsNumber: roll.roll('1d6').result };
  }

  if ((currentAge >= 21 && currentAge <= 30) || (currentAgeRoll >= 21 && currentAgeRoll <= 59)) {
    return { currentAge: '2159', lifeEventsNumber: roll.roll('1d4').result };
  }

  if ((currentAge >= 1 && currentAge <= 20) || (currentAgeRoll >= 0 && currentAgeRoll <= 20)) {
    return { currentAge: '0120', lifeEventsNumber: 1 };
  }
}
