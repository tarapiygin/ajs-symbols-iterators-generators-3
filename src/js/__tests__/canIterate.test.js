import canIterate from '../canIterate';

test('should return true for the Map()', () => {
  expect(canIterate(new Map())).toEqual(true);
});

test('should return true for the Set()', () => {
  expect(canIterate(new Set())).toEqual(true);
});

test('should return false for the null', () => {
  expect(canIterate(null)).toEqual(false);
});

test('should return false for the number', () => {
  expect(canIterate(10)).toEqual(false);
});

test('should return true for the string', () => {
  expect(canIterate('Netology')).toEqual(true);
});

test('should return false for the undefined', () => {
  expect(canIterate(undefined)).toEqual(false);
});

test('should return false for the bolean', () => {
  expect(canIterate(false)).toEqual(false);
});
