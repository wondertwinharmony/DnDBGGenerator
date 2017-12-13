export function backgroundResult({ background }) {
  return({
    type: 'backgroundResult',
    background,
  });
};

export function classTrainingResult({ classTraining }) {
  return({
    type: 'classTrainingResult',
    classTraining,
  });
};
