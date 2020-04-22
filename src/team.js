/**
 * The team and methods to manage it
 *
 * @param string n - The name of the team
 */
function Team(n) {
  let _name = n,
    _points = 0;

  /**
   * Get the team name
   *
   * @return string - The name of the team
   */
  function getName() {
    return _name;
  }

  /**
   * Get the team's points
   *
   * @return number - The team's points
   */
  function getPoints() {
    return _points;
  }

  /**
   * Record the outcome of the game
   *
   * @parm number outcome - The value assigned to an outcome from the Outcome enum
   */
  function recordOutcome(outcome) {
    _points += outcome;
  }

  /**
   * The compare function used to sort the linked list when inserting a team
   *
   * @param Team otherTeam - The team to compare to the current team
   *
   * @return number - Either one or minus one to indicate which team comes before which in the list
   */
  function compareTo(otherTeam) {
    if (_points > otherTeam.getPoints()) {
      return -1;
    } else if (_points < otherTeam.getPoints()) {
      return 1;
    } else {
      if (_name > otherTeam.getName()) {
        return 1;
      } else {
        return -1;
      }
    }
  }

  /**
   * The equal function to match two teams
   *
   * @param string value - The string i.e. team name to match
   *
   * @return bool - Whether or not it is equal
   */
  function equal(value) {
    const result = _name === value;

    return result;
  }

  return {
    getName,
    getPoints,
    recordOutcome,
    compareTo,
    equal
  };
}

module.exports = Team;
