export function characterBackgroundResult({ characterBackground }) {
  return ({
    type: 'characterBackgroundResult',
    characterBackground,
  });
}

export function characterClassResult({ characterClass }) {
  return ({
    type: 'characterClassResult',
    characterClass,
  });
}

export function characterRaceResult({ characterRace }) {
  return ({
    type: 'characterRaceResult',
    characterRace,
  });
}

export function backgroundResult({ background }) {
  return ({
    type: 'backgroundResult',
    background,
  });
}

export function classTrainingResult({ classTraining }) {
  return ({
    type: 'classTrainingResult',
    classTraining,
  });
}
