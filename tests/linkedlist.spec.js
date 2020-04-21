const LinkedList = require('../src/utils/linkedlist');
const Team = require('../src/team');

describe('LinkedList object', function () {
  it('should not return undefined', function () {
    // Arrange
    const expected = undefined;

    // Act
    const actual = LinkedList();

    // Assert
    expect(actual).not.toBe(expected);
  });

  it('should return null on empty linked list', function () {
    // Arrange
    const expected = null,
      list = LinkedList();

    // Act
    const actual = list.getHead();

    // Assert
    expect(actual).toBe(expected);
  });

  it('should return "Test"', function () {
    // Arrange
    const value = 'Test',
      expected = value,
      list = LinkedList(),
      team = Team(value),
      anotherTeam = Team('Another test');

    // Act
    list.insert(team);
    list.insert(anotherTeam);

    //list.printList();

    const actual = list.getHead().getName();

    // Assert
    expect(actual).toBe(expected);
  });
});
