export function incrementCounter({ count }) {
  return({
    type: 'incrementCounter',
    count,
  });
};

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
