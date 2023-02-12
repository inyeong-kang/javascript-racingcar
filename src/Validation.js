const { ERROR_MESSAGE, GAME_NUMBER, INPUT_REGEX } = require('./constants');

const Validation = {
  duplicatedCarName(carNames) {
    const carNamesLowerCase = carNames.map((carName) => {
      return carName.toLowerCase();
    });
    const isDulicate =
      new Set(carNamesLowerCase).size !== carNamesLowerCase.length;
    if (isDulicate) {
      throw new Error(ERROR_MESSAGE.duplicatedCarName);
    }
  },

  carNameLengthRange(carNames) {
    carNames.forEach((carName) => {
      if (
        carName.length < GAME_NUMBER.minCarNameLength ||
        carName.length > GAME_NUMBER.maxCarNameLength
      ) {
        throw new Error(ERROR_MESSAGE.carNameLengthRange);
      }
    });
  },
  carCountRange(carCount) {
    if (
      carCount < GAME_NUMBER.minCarCount ||
      carCount > GAME_NUMBER.maxCarCount
    ) {
      throw new Error(ERROR_MESSAGE.carCountRange);
    }
  },
  isAlphabet(carNames) {
    const regex = INPUT_REGEX.onlyAlphabetRegex;
    carNames.forEach((carName) => {
      if (regex.test(carName)) throw new Error(ERROR_MESSAGE.onlyAlphabet);
    });
  },

  carName(carNames) {
    this.duplicatedCarName(carNames);
    this.carNameLengthRange(carNames);
    this.carCountRange(carNames.length);
    this.onlyAlphabet(carNames);
  },

  isNumber(attempt) {
    const regex = INPUT_REGEX.onlyNumberRegex;
    return regex.test(attempt);
  },

  isInteger(attempt) {
    return Number.isInteger(attempt);
  },

  isIntegerNumber(attempt) {
    if (this.isNumber(attempt) || !this.isInteger(attempt)) {
      throw new Error(ERROR_MESSAGE.onlyInt);
    }
  },

  attemptRange(attempt) {
    if (attempt < GAME_NUMBER.minAttempt || attempt > GAME_NUMBER.maxAttempt) {
      throw new Error(ERROR_MESSAGE.attemptRange);
    }
  },

  attempt(attempts) {
    this.isIntegerNumber(attempts);
    this.attemptRange(attempts);
  },
};

module.exports = Validation;
