const League = require('../src/league');

describe('League module', () => {
  it('should not return undefined', () => {
    // Arrange
    const expected = undefined;

    // Act
    const actual = League();

    // Assert
    expect(actual).not.toBe(expected);
  });

  it('should print the correct ranking table for given input', () => {
    // Arrange
    const superLeague = League(),
      storeLog = inputs => (actual += inputs),
      expected = '1. Lions, 92. Big Dogs, 63. FC Awesome, 64. Snakes, 65. Cats, 36. Tarantulas, 37. Snails, 0';
    let actual = '';

    console['log'] = jest.fn(storeLog);

    // Act
    superLeague.recordGame('Lions 1, Snakes 3');
    superLeague.recordGame('Tarantulas 1, FC Awesome 0');
    superLeague.recordGame('Lions 1, FC Awesome 2');
    superLeague.recordGame('Snakes 1, Lions 2');
    superLeague.recordGame('Snails 1, Big Dogs 2');
    superLeague.recordGame('Lions 1, Snakes 3');
    superLeague.recordGame('Lions 1, FC Awesome 2');
    superLeague.recordGame('Snakes 1, Lions 2');
    superLeague.recordGame('Snails 1, Lions 2');
    superLeague.recordGame('Cats 1, FC Awesome 0');
    superLeague.recordGame('Lions 1, Big Dogs 2');

    superLeague.printRankingTable();

    // Assert
    expect(actual).toBe(expected);
  });
});
