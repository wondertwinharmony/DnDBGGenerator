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
import { causeOfDeath } from '../supplemental/causeOfDeath.js';

export function event() {
  const roll = new Roll();
  const eventRoll = roll.roll('d100');

  let adventureResult;
  let boonId;
  let crimeId;
  let arcaneMatterId;
  let punishmentId;
  let supernaturalEventId;
  let tragedyId;
  let warId;
  let weirdStuffId;
  let secondDieRoll;
  let newAdventurer;
  let newCommoner;
  let outcomeResultString;

  if (eventRoll.result >= 1 && eventRoll.result <= 10) {
    tragedyId = tragedies();

    if (tragedyId === '012') {
      const familyFriendDeathId = causeOfDeath();

      return { outcome: '0110', secondaryTable: 'Tragedies', secondaryTableResult: tragedyId, familyFriendDeathId, multiTable: false };
    }

    if (tragedyId === '5') {
      const yearsImprisoned = roll.roll('d6').result;

      return { outcome: '0110', secondaryTable: 'Tragedies', secondaryTableResult: tragedyId, yearsImprisoned, multiTable: false };
    }

    if (tragedyId === '11') {
      const endedRelationshipRoll = roll.roll('d2').result;
      const endedRelationship = endedRelationshipRoll === 1 ? 'It ended with bad feelings.' : 'It ended amicably.';

      return { outcome: '0110', secondaryTable: 'Tragedies', secondaryTableResult: tragedyId, endedRelationship, multiTable: false };
    }

    if (tragedyId === '12') {
      const romanticPartnerDeathId = causeOfDeath();
      if (romanticPartnerDeathId === '2') {
        const faultRoll = roll.roll('d12').result;
        const fault = faultRoll === 1 ? 'You were directly or indirectly responsible for the murder.' : 'You were not responsible for the murder.';

        return { outcome: '0110', secondaryTable: 'Tragedies', secondaryTableResult: tragedyId, romanticPartnerDeathId, fault, multiTable: false };
      }

      return { outcome: '0110', secondaryTable: 'Tragedies', secondaryTableResult: tragedyId, romanticPartnerDeathId, multiTable: false };
    }

    return { outcome: '0110', secondaryTable: 'Tragedies', secondaryTableResult: tragedyId, multiTable: false };
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
    newAdventurer = createAdventurer();
    newAdventurer.attitude = '34';
    outcomeResultString = secondDieRoll % 2 === 0 ? ' You did not cause the rift between you and the adventurer. Your enemy adventurer is a(n) ' : ' You caused the rift between you and the adventurer.  Your enemy adventurer is a(n) ';

    return { outcome: '3140', outcomeResult: outcomeResultString, characterEncounter: newAdventurer, secondaryTable: null, multiTable: false };
  }

  if (eventRoll.result >= 41 && eventRoll.result <= 50) {
    newAdventurer = createAdventurer();
    newAdventurer.attitude = '510';
    outcomeResultString = ' Your adventurer friend is a(n) ';

    return { outcome: '4150', outcomeResult: outcomeResultString, characterEncounter: newAdventurer, secondaryTable: null, multiTable: false };
  }

  if (eventRoll.result >= 51 && eventRoll.result <= 70) {
    secondDieRoll = roll.roll('2d6').result;
    outcomeResultString = ` This event gives you an extra ${secondDieRoll} gp.`;

    return { outcome: '5170', outcomeResult: outcomeResultString, characterEncounter: null, secondaryTable: null, multiTable: false };
  }

  if (eventRoll.result >= 71 && eventRoll.result <= 75) {
    newAdventurer = createAdventurer();
    outcomeResultString = ' This important person is a(n) ';

    return { outcome: '7175', outcomeResult: outcomeResultString, secondaryTable: null, characterEncounter: newAdventurer, multiTable: false };
  }

  if (eventRoll.result >= 76 && eventRoll.result <= 80) {
    adventureResult = adventures();

    return { outcome: '7680', outcomeResult: null, characterEncounter: null, secondaryTable: 'Adventures', secondaryTableResult: adventureResult.id, secondaryRollString: adventureResult.secondaryRollString, multiTable: false };
  }

  if (eventRoll.result >= 81 && eventRoll.result <= 85) {
    supernaturalEventId = supernaturalEvents();

    if (supernaturalEventId === '0105') {
      const enslavedYears = roll.roll('d6').result;

      return { outcome: '8185', outcomeResult: null, characterEncounter: null, secondaryTable: 'Supernatural Events', secondaryTableResult: supernaturalEventId, enslavedYears, multiTable: false };
    }

    if (supernaturalEventId === '1115') {
      const additionalGold = roll.roll('d20+50').result;

      return { outcome: '8185', outcomeResult: null, characterEncounter: null, secondaryTable: 'Supernatural Events', secondaryTableResult: supernaturalEventId, additionalGold, multiTable: false };
    }

    if (supernaturalEventId === '7175') {
      const possessionType = {
        1: 'celestial',
        2: 'devil',
        3: 'demon',
        4: 'fey',
        5: 'elemental',
        6: 'undead',
      };
      const possession = possessionType[roll.roll('d6').result];

      return { outcome: '8185', outcomeResult: null, characterEncounter: null, secondaryTable: 'Supernatural Events', secondaryTableResult: supernaturalEventId, possession, multiTable: false };
    }

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
}
