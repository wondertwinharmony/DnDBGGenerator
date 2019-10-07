export function currentAgeResult({ currentAge }) {
  return ({
    type: 'currentAgeResult',
    currentAge,
  });
}

export function numberOfLifeEventsResult({ numberOfLifeEvents }) {
  return ({
    type: 'numberOfLifeEventsResult',
    numberOfLifeEvents,
  });
}

export function eventResult({ lifeEvent, lifeEventId }) {
  return ({
    type: 'eventResult',
    lifeEvent,
    lifeEventId,
  });
}

export function resetLifeEvents({}) {
  return ({
    type: 'resetLifeEvents',
  });
}
