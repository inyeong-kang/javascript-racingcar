const Car = require('../src/model/Car');

describe('Car 모델 테스트', () => {
  const car = new Car('제로');

  Array.from({ length: 2 }).forEach(() => {
    car.setProgress();
  });

  test('주어진 자동차 이름을 조회한다.', () => {
    expect(car.getName()).toBe('제로');
  });

  test('자동차 경주 게임 진행도를 조회한다.', () => {
    expect(car.getProgress()).toEqual(['-', '-']);
  });
});
