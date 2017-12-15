import Roll from 'roll';
import { adventurerBackgrounds } from '../creators/adventurerBackgrounds.js';

const backgrounds = {
  1: 'Acolyte',
  2: 'Charlatan',
  3: 'Criminal',
  4: 'Entertainer',
  5: 'Folk Hero',
  6: 'Guild Artisan',
  7: 'Hermit',
  8: 'Noble',
  9: 'Outlander',
  10: 'Sage',
  11: 'Sailor',
  12: 'Soldier',
  13: 'Urchin',
};

export function background(backgroundTitle) {
  const roll = new Roll();
  const backgroundRoll = roll.roll('d6');
  const randomBackgroundRoll = adventurerBackgrounds();
  const title = backgroundTitle || randomBackgroundRoll;

  return ({ backgroundRoll: backgroundRoll.result.toString(), title });
};
