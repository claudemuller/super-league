const Game = require('../src/game');
const Team = require('../src/team');

describe('Game module', () => {
  it('should not return undefined', () => {
    // Arrange
    const expected = undefined,
      data =[
        {team: Team('Test'), score: 1},
        {team: Team('Another Test'), score: 4}
      ];

    // Act
    const actual = Game(data);

    // Assert
    expect(actual).not.toBe(expected);
  });
});
