const Game = require('../src/game');

describe('Game module', () => {
  it('should not return undefined', () => {
     Arrange
    const expected = undefined;

    // Act
    const actual = Game();

    // Assert
    expect(actual).not.toBe(expected);
  });
});
