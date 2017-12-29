import { halfElfParents } from './halfElfParents.js';
import { halfOrcParents } from './halfOrcParents.js';
import { tieflingParents } from './tieflingParents.js';

export function parentsRace(raceInput) {
  const parentsRace = '';

  if (raceInput === 'Half-Elf') {
    return halfElfParents();
  }

  if (raceInput === 'Half-Orc') {
    return halfOrcParents();
  }

  if (raceInput === 'Tiefling') {
    return tieflingParents();
  }
};
