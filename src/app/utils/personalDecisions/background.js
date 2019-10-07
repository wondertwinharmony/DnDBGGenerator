import Roll from 'roll';
import { adventurerBackgrounds } from '../creators/adventurerBackgrounds.js';

export function background(backgroundInput) {
  const roll = new Roll();
  const backgroundRoll = roll.roll('d6');
  const randomBackgroundRoll = adventurerBackgrounds();
  const title = backgroundInput || randomBackgroundRoll;

  return ({ backgroundRoll: backgroundRoll.result.toString(), title });
}
