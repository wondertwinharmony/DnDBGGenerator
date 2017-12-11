export function parentsResult({ parents }) {
  return({
    type: 'parentsResult',
    parents,
  });
};

export function parentsAlignmentResult({ parentAlignment, parent }) {
  return({
    type: 'parentsAlignmentResult',
    parentAlignment,
    parent,
  });
};

export function parentsOccupationResult({ parentOccupation, parent }) {
  return({
    type: 'parentsOccupationResult',
    parentOccupation,
    parent,
  });
};

export function parentsClassResult({ parentClass, parent }) {
  return({
    type: 'parentsClassResult',
    parentClass,
    parent,
  });
};
