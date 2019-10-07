import { adventurerBackgrounds } from './adventurerBackgrounds.js';
import { race } from '../supplemental/race.js';
import { supplementalClass } from '../supplemental/supplementalClass.js';
import { alignment } from '../supplemental/alignment.js';
import { status } from '../supplemental/status.js';
import { attitude } from '../supplemental/attitude.js';

export function createAdventurer() {
  const adventurer = {
    race: race(),
    class: supplementalClass(),
    background: adventurerBackgrounds(),
    alignment: alignment(),
    status: status(),
    attitude: attitude(),
  };

  return adventurer;
}
