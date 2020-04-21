const Team = require('../src/team');
const Outcome = require('../src/enums/outcome');

describe('Team object', () => {
  it('should not return undefined', () => {
    // Arrange
    const expected = undefined;

    // Act
    const actual = Team();

    // Assert
    expect(actual).not.toBe(expected);
  });

  it('should return the team name if contructed with a team name', () => {
    // Arrange
    const teamName = 'Lions',
      expected = teamName;

    // Act
    const team = Team(teamName),
      actual = team.getName();

    // Assert
    expect(actual).toBe(expected);
  });

  it('should return zero if a loss is recorded', () => {
    // Arrange
    const outcome = Outcome.Loss,
      expected = outcome;

    // Act
    const team = Team('Lions');

    team.recordOutcome(outcome);

    const actual = team.getPoints();

    // Assert
    expect(actual).toBe(expected);
  });

  it('should return one if a draw is recorded', () => {
    // Arrange
    const outcome = Outcome.Draw,
      expected = outcome;

    // Act
    const team = Team('Lions');

    team.recordOutcome(outcome);

    const actual = team.getPoints();

    // Assert
    expect(actual).toBe(expected);
  });

  it('should return three if a win is recorded', () => {
    // Arrange
    const outcome = Outcome.Win,
      expected = outcome;

    // Act
    const team = Team('Lions');

    team.recordOutcome(outcome);

    const actual = team.getPoints();

    // Assert
    expect(actual).toBe(expected);
  });

  it('should return 1 when "Test" team is higher in rank than "Another test"', () => {
    // Arrange
    const expected = 1,
      team = Team('Test'),
      anotherTeam = Team('Another test');

    // Act
    team.recordOutcome(Outcome.Win);
    team.recordOutcome(Outcome.Win);
    anotherTeam.recordOutcome(Outcome.Win);

    const actual = team.compareTo(anotherTeam);

    // Assert
    expect(actual).toBe(expected);
  });

  it('should return -1 when "Test" team is lower in rank than "Another test"', () => {
    // Arrange
    const expected = -1,
      team = Team('Test'),
      anotherTeam = Team('Another test');

    // Act
    team.recordOutcome(Outcome.Win);
    anotherTeam.recordOutcome(Outcome.Win);
    anotherTeam.recordOutcome(Outcome.Win);

    const actual = team.compareTo(anotherTeam);

    // Assert
    expect(actual).toBe(expected);
  });

  it('should return -1 when "Test" team is the same in rank than "Another test" but further in the alphabet', () => {
    // Arrange
    const expected = -1,
      team = Team('Test'),
      anotherTeam = Team('Another test');

    // Act
    team.recordOutcome(Outcome.Win);
    anotherTeam.recordOutcome(Outcome.Win);

    const actual = team.compareTo(anotherTeam);

    // Assert
    expect(actual).toBe(expected);
  });
});
