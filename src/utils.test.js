import { createStar, updateStar } from './utils';

let _Math;

beforeEach(() => {
  _Math = Math;
});

afterEach(() => {
  Math = _Math;
});

const mockRandom = (returnValue) => {
  Math = Object.create(Math);
  Math.random = () => returnValue;
};

test('create a star', () => {
  mockRandom(1);
  const star = createStar(10, 10, 5, false);
  expect(star.x).toBe(10);
  expect(star.y).toBe(10);
  expect(star.s).toBeGreaterThan(0);
  expect(star.w).toBe(2);
});

test('move a star to top', () => {
  const star = createStar(10, 10, 1, false);
  star.y = 1;
  star.s = 1;
  updateStar(star, 10);
  expect(star.y).toBe(0);
  updateStar(star, 10);
  expect(star.y).toBe(10);
});

test('move a star to bottom', () => {
  const star = createStar(10, 10, 1, true);
  star.y = 9;
  star.s = -1;
  updateStar(star, 10);
  expect(star.y).toBe(10);
  updateStar(star, 10);
  expect(star.y).toBe(0);
});
