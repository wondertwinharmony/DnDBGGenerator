export function parentsResult({ parents }) {
  return ({
    type: 'parentsResult',
    parents,
  });
}

export function birthplaceResult({ birthplace }) {
  return ({
    type: 'birthplaceResult',
    birthplace,
  });
}

export function parentsRaceResult({ parentsRace }) {
  return ({
    type: 'parentsRaceResult',
    parentsRace,
  });
}

export function parentsAlignmentResult({ parentAlignment, parent }) {
  return ({
    type: 'parentsAlignmentResult',
    parentAlignment,
    parent,
  });
}

export function parentsOccupationResult({ parentOccupation, parent }) {
  return ({
    type: 'parentsOccupationResult',
    parentOccupation,
    parent,
  });
}

export function parentsClassResult({ parentClass, parent }) {
  return ({
    type: 'parentsClassResult',
    parentClass,
    parent,
  });
}
