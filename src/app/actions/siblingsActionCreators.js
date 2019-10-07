export function siblingsResult({ numberOfSiblings }) {
  return ({
    type: 'siblingsResult',
    numberOfSiblings,
  });
}

export function siblingsOccupationResult({ siblingsOccupation, sibling }) {
  return ({
    type: 'siblingsOccupationResult',
    siblingsOccupation,
    sibling,
  });
}

export function siblingsAlignmentResult({ siblingsAlignment, sibling }) {
  return ({
    type: 'siblingsAlignmentResult',
    siblingsAlignment,
    sibling,
  });
}

export function siblingsStatusResult({ siblingsStatus, sibling }) {
  return ({
    type: 'siblingsStatusResult',
    siblingsStatus,
    sibling,
  });
}

export function siblingsAttitudeResult({ siblingsAttitude, sibling }) {
  return ({
    type: 'siblingsAttitudeResult',
    siblingsAttitude,
    sibling,
  });
}

export function siblingsClassResult({ siblingsClass, sibling }) {
  return ({
    type: 'siblingsClassResult',
    siblingsClass,
    sibling,
  });
}

export function siblingsBirthOrderResult({ siblingsBirthOrder, sibling }) {
  return ({
    type: 'siblingsBirthOrderResult',
    siblingsBirthOrder,
    sibling,
  });
}

export function resetStore({}) {
  return ({
    type: 'resetStore',
  });
}
