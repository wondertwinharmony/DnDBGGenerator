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
      weirdStuffId;

  if (eventRoll.result >= 1 && eventRoll.result <= 10) {
    tragedyId = tragedies();
    return { outcome: '0110', secondaryTable: 'Tragedies', secondaryTableResult: tragedyId, multiTable: false };
  }

  if (eventRoll.result >= 11 && eventRoll.result <= 20) {
    boonId = boons();
    return { outcome: '1120', secondaryTable: 'Boons', secondaryTableResult: boonId, multiTable: false };
  }

  if (eventRoll.result >= 21 && eventRoll.result <= 30) {
    return { outcome: '2130', secondaryTable: null, multiTable: false };
  }

  if (eventRoll.result >= 31 && eventRoll.result <= 40) {
    return { outcome: '3140', secondaryTable: null, multiTable: false };
  }

  if (eventRoll.result >= 41 && eventRoll.result <= 50) {
    return { outcome: '4150', secondaryTable: null, multiTable: false };
  }

  if (eventRoll.result >= 51 && eventRoll.result <= 70) {
    return { outcome: '5170', secondaryTable: null, multiTable: false };
  }

  if (eventRoll.result >= 71 && eventRoll.result <= 75) {
    return { outcome: '7175', secondaryTable: null, multiTable: false };
  }

  if (eventRoll.result >= 76 && eventRoll.result <= 80) {
    adventureId = adventures();
    return { outcome: '7680', secondaryTable: 'Adventures', secondaryTableResult: adventureId, multiTable: false };
  }

  if (eventRoll.result >= 81 && eventRoll.result <= 85) {
    supernaturalEventId = supernaturalEvents();
    return { outcome: '8185', secondaryTable: 'Supernatural Events', secondaryTableResult: supernaturalEventId, multiTable: false };
  }

  if (eventRoll.result >= 86 && eventRoll.result <= 90) {
    warId = war();
    return { outcome: '8690', secondaryTable: 'War', secondaryTableResult: warId, multiTable: false };
  }

  if (eventRoll.result >= 91 && eventRoll.result <= 95) {
    crimeId = crime();
    punishmentId = punishment();
    return { outcome: '9195', secondaryTable: { one: 'Crime', two: 'Punishment' }, secondaryTableResult: { one: crimeId, two: punishmentId }, multiTable: true };
  }

  if (eventRoll.result >= 96 && eventRoll.result <= 99) {
    arcaneMatterId = arcaneMatters();
    return { outcome: '9699', secondaryTable: 'Arcane Matters', secondaryTableResult: arcaneMatterId, multiTable: false };
  }

  if (eventRoll.result === 100) {
    weirdStuffId = weirdStuff();
    return { outcome: '0', secondaryTable: 'Weird Stuff', secondaryTableResult: weirdStuffId, multiTable: false };
  }
};
