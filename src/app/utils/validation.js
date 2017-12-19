export const required = value => (value ? undefined : 'Required');
export const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined;
const minValue = min => value =>
  value && value < min ? `Must be at least ${min}` : undefined
export const minValue1 = minValue(1);
