const { isMove, getRandomNumber } = require('../src/utils');

describe('utils 테스트', () => {
  test.each([
    [4, true],
    [3, false],
    [1.7, false],
    [4.1, true],
  ])('isMove 함수 테스트: %s일 때 %s 반환한다.', (number, expected) => {
    expect(isMove(number)).toBe(expected);
  });

  test('자동차 전진 여부와 관련된 랜덤 값을 반환한다.', () => {
    Array.from({ length: 10 }).forEach(() => {
      expect(getRandomNumber()).toBeGreaterThanOrEqual(0);
      expect(getRandomNumber()).toBeLessThanOrEqual(9);
    });
  });
});
