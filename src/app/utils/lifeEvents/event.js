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

export function event() {
  const roll = new Roll();
  const eventRoll = roll.roll('d100');
  let adventureId,
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
      outcomeResultString;

  if (eventRoll.result >= 1 && eventRoll.result <= 10) {
    tragedyId = tragedies();
    return { outcome: '0110', outcomeResult: null, characterEncounter: null, secondaryTable: 'Tragedies', secondaryTableResult: tragedyId, multiTable: false };
  }

  if (eventRoll.result >= 11 && eventRoll.result <= 20) {
    boonId = boons();
    return { outcome: '1120', outcomeResult: null, characterEncounter: null, secondaryTable: 'Boons', secondaryTableResult: boonId, multiTable: false };
  }

  if (eventRoll.result >= 21 && eventRoll.result <= 30) {
    return { outcome: '2130', outcomeResult: null, characterEncounter: null, secondaryTable: null, multiTable: false };
  }

  if (eventRoll.result >= 31 && eventRoll.result <= 40) {
    secondDieRoll = roll.roll('1d6').result;
    outcomeResultString = secondDieRoll%2 === 0 ? 'You did not cause the rift between you and the adventurer.' : 'You caused the rift between you and the adventurer.'
    newAdventurer = createAdventurer();

    console.log(outcomeResultString);
    console.log(newAdventurer);
    return { outcome: '3140', outcomeResult: outcomeResultString, characterEncounter: newAdventurer, secondaryTable: null, multiTable: false };
  }

  if (eventRoll.result >= 41 && eventRoll.result <= 50) {
    newAdventurer = createAdventurer();
    return { outcome: '4150', outcomeResult: null, characterEncounter: newAdventurer, secondaryTable: null, multiTable: false };
  }

  if (eventRoll.result >= 51 && eventRoll.result <= 70) {
    secondDieRoll = roll.roll('2d6').result;
    outcomeResultString = 'This event gives you an extra ' + secondDieRoll + ' gp.';
    console.log(outcomeResultString);
    return { outcome: '5170', outcomeResult: outcomeResultString, characterEncounter: null, secondaryTable: null, multiTable: false };
  }

  if (eventRoll.result >= 71 && eventRoll.result <= 75) {
    newAdventurer = createAdventurer();
    return { outcome: '7175', outcomeResult: null , secondaryTable: null, characterEncounter: newAdventurer, multiTable: false };
  }

  if (eventRoll.result >= 76 && eventRoll.result <= 80) {
    adventureId = adventures();
    return { outcome: '7680', outcomeResult: null, characterEncounter: null, secondaryTable: 'Adventures', secondaryTableResult: adventureId, multiTable: false };
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
    crimeId = crime();
    punishmentId = punishment();
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
