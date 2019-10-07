import { adventurerBackgrounds } from './adventurerBackgrounds.js';
import { race } from '../supplemental/race.js';
import { alignment } from '../supplemental/alignment.js';
import { status } from '../supplemental/status.js';
import { attitude } from '../supplemental/attitude.js';

export function createCommoner() {
  const commoner = {
    race: race(),
    background: adventurerBackgrounds(),
    alignment: alignment(),
    status: status(),
    attitude: attitude(),
  };

  return commoner;
}
