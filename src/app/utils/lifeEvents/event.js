import Roll from 'roll';
import { adventures } from '../secondary/adventures.js';
import { boons } from '../secondary/boons.js';
import { crime } from '../secondary/crime.js';
import { arcaneMatters } from '../secondary/arcaneMatters.js';
import { punishment } from '../secondary/punishment.js';
import { supernaturalEvents } from '../secondary/supernaturalEvents.js';
import { tragedies } from '../secondary/tragedies.js';
import { war } from '../secondary/war.js';
import { weirdStuff } from '../secondary/weirdStuff.js';
import { createAdventurer } from '../creators/adventurerCreator.js';
import { createCommoner } from '../creators/commonerCreator.js';

export function event() {
  const roll = new Roll();
  //TODO: remove this when done testing changes
  // const eventRoll = roll.roll('d100');
  const eventRoll = { result: 91 };
  let adventureResult,
      boonId,
      crimeId,
      arcaneMatterId,
      punishmentId,
      supernaturalEventId,
      tragedyId,
      warId,
      weirdStuffId,
      secondDieRoll,
      newAdventurer,
      newCommoner,
      outcomeResultString;

  if (eventRoll.result >= 1 && eventRoll.result <= 10) {
    tragedyId = tragedies();

    return { outcome: '0110', outcomeResult: null, characterEncounter: null, secondaryTable: 'Tragedies', secondaryTableResult: tragedyId, multiTable: false };
  }

  if (eventRoll.result >= 11 && eventRoll.result <= 20) {
    const foundMoney = roll.roll('d20').result;
    const stipend = roll.roll('d20').result;
    boonId = boons();

    if (boonId === '2') {
      newCommoner = createCommoner();
      return { outcome: '1120', commoner: newCommoner, secondaryTable: 'Boons', secondaryTableResult: boonId };
    }

    if (boonId === '4') {
      return { outcome: '1120', foundMoney, secondaryTable: 'Boons', secondaryTableResult: boonId };
    }

    if (boonId === '10') {
      return { outcome: '1120', stipend, secondaryTable: 'Boons', secondaryTableResult: boonId };
    }

    return { outcome: '1120', secondaryTable: 'Boons', secondaryTableResult: boonId };
  }

  if (eventRoll.result >= 21 && eventRoll.result <= 30) {
    return { outcome: '2130', outcomeResult: null, characterEncounter: null, secondaryTable: null, multiTable: false };
  }

  if (eventRoll.result >= 31 && eventRoll.result <= 40) {
    secondDieRoll = roll.roll('1d6').result;
    outcomeResultString = secondDieRoll%2 === 0 ? '\n\nEVENT SUPPLEMENTAL CHARACTER RESULTS: You did not cause the rift between you and the adventurer. Your enemy adventurer is a(n) ' : '\n\nEVENT SUPPLEMENTAL CHARACTER: You caused the rift between you and the adventurer.  Your enemy adventurer is a(n) '
    newAdventurer = createAdventurer();

    return { outcome: '3140', outcomeResult: outcomeResultString, characterEncounter: newAdventurer, secondaryTable: null, multiTable: false };
  }

  if (eventRoll.result >= 41 && eventRoll.result <= 50) {
    newAdventurer = createAdventurer();
    outcomeResultString = '\n\nEVENT SUPPLEMENTAL CHARACTER: Your adventurer friend is a(n) ';

    return { outcome: '4150', outcomeResult: outcomeResultString, characterEncounter: newAdventurer, secondaryTable: null, multiTable: false };
  }

  if (eventRoll.result >= 51 && eventRoll.result <= 70) {
    secondDieRoll = roll.roll('2d6').result;
    outcomeResultString = ' (Roll Results) This event gives you an extra ' + secondDieRoll + ' gp.';

    return { outcome: '5170', outcomeResult: outcomeResultString, characterEncounter: null, secondaryTable: null, multiTable: false };
  }

  if (eventRoll.result >= 71 && eventRoll.result <= 75) {
    newAdventurer = createAdventurer();
    outcomeResultString = '\n\nEVENT SUPPLEMENTAL CHARACTER: This important person is a(n) ';

    return { outcome: '7175', outcomeResult: outcomeResultString , secondaryTable: null, characterEncounter: newAdventurer, multiTable: false };
  }

  if (eventRoll.result >= 76 && eventRoll.result <= 80) {
    adventureResult = adventures();

    return { outcome: '7680', outcomeResult: null, characterEncounter: null, secondaryTable: 'Adventures', secondaryTableResult: adventureResult.id, secondaryRollString: adventureResult.secondaryRollString, multiTable: false };
  }

  if (eventRoll.result >= 81 && eventRoll.result <= 85) {
    supernaturalEventId = supernaturalEvents();

    return { outcome: '8185', outcomeResult: null, characterEncounter: null, secondaryTable: 'Supernatural Events', secondaryTableResult: supernaturalEventId, multiTable: false };
  }

  if (eventRoll.result >= 86 && eventRoll.result <= 90) {
    warId = war();

    return { outcome: '8690', outcomeResult: null, characterEncounter: null, secondaryTable: 'War', secondaryTableResult: warId, multiTable: false };
  }

  if (eventRoll.result >= 91 && eventRoll.result <= 95) {
    const sentenceYears = roll.roll('d4').result;
    crimeId = crime();
    punishmentId = punishment();

    //TODO: 1d4 years
    if (punishmentId === '912') {
      return { outcome: '9195', outcomeResult: null, characterEncounter: null, secondaryTable: { one: 'Crime', two: 'Punishment' }, secondaryTableResult: { one: crimeId, two: punishmentId, sentenceYears }, multiTable: true };
    }

    return { outcome: '9195', outcomeResult: null, characterEncounter: null, secondaryTable: { one: 'Crime', two: 'Punishment' }, secondaryTableResult: { one: crimeId, two: punishmentId }, multiTable: true };
  }

  if (eventRoll.result >= 96 && eventRoll.result <= 99) {
    arcaneMatterId = arcaneMatters();

    return { outcome: '9699', outcomeResult: null, characterEncounter: null, secondaryTable: 'Arcane Matters', secondaryTableResult: arcaneMatterId, multiTable: false };
  }

  if (eventRoll.result === 100) {
    weirdStuffId = weirdStuff();

    return { outcome: '0', outcomeResult: null, characterEncounter: null, secondaryTable: 'Weird Stuff', secondaryTableResult: weirdStuffId, multiTable: false };
  }
};
