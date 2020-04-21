function Team(n) {
  let _name = n,
    _points = 0;

  function getName() {
    return _name;
  }

  function getPoints() {
    return _points;
  }

  function recordOutcome(outcome) {
    _points += outcome;
  }

  function compareTo(otherTeam) {
    if (_points > otherTeam.getPoints()) {
      return 1;
    } else if (otherTeam.getPoints() > _points) {
      return -1;
    } else {
      console.log(_points, _name, ':', otherTeam.getName(), otherTeam.getPoints());

      if (_name < otherTeam.getName()) {
        return 1;
      } else {
        return -1;
      }
    }
  }

  return {
    getName,
    getPoints,
    recordOutcome,
    compareTo
  };
}

module.exports = Team;
