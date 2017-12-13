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
    //TODO: '2130':	'You fell in love or got married. If you get this result more than once, you can choose to have a child instead. Work with your DM to determine the identity of your love interest.',
    return { outcome: '2130', secondaryTable: null, multiTable: false };
  }

  if (eventRoll.result >= 31 && eventRoll.result <= 40) {
    //TODO: '3140':	'You made an enemy of an adventurer. Roll a d6. An odd number indicates you are to blame for the rift, and an even number indicates you are blameless. Use the supplemental tables and work with your DM to determine this hostile character’s identity and the danger this enemy poses to you.',
    return { outcome: '3140', secondaryTable: null, multiTable: false };
  }

  if (eventRoll.result >= 41 && eventRoll.result <= 50) {
    //TODO: '4150':	'You made a friend of an adventurer. Use the supplemental tables and work with your DM to add more detail to this friendly character and establish how your friendship began.',
    return { outcome: '4150', secondaryTable: null, multiTable: false };
  }

  if (eventRoll.result >= 51 && eventRoll.result <= 70) {
    //TODO: '5170':	'You spent time working in a job related to your background. Start the game with an extra 2d6 gp.',
    return { outcome: '5170', secondaryTable: null, multiTable: false };
  }

  if (eventRoll.result >= 71 && eventRoll.result <= 75) {
    //TODO: '7175':	'You met someone important. Use the supplemental tables to determine this character’s identity and how this individual feels about you. Work out additional details with your DM as needed to fit this character into your backstory.',
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
    // return { outcome: '9195', crimeAndPunishmentTableResult: { crime: crimeId, punishment: punishmentId } };
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
