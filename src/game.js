const Outcome = require('./enums/outcome');

function Game(data) {
  const [_team1, _team2] = data;
  let _winner = null;

  if (_team1.score > _team2.score) {
    _winner = _team1.team;
    _team1.team.recordOutcome(Outcome.Win);
  } else if (_team2.score > _team1.score) {
    _winner = _team2.team;
    _team2.team.recordOutcome(Outcome.Win);
  } else {
    _team1.team.recordOutcome(Outcome.Draw);
    _team2.team.recordOutcome(Outcome.Draw);
  }

  function _getTeams() {
    const teams = [
      _team1.team,
      _team2.team,
    ];

    return teams;
  }

  function getWinner() {
    return _winner ? _winner : _getTeams();
  }

  return {getWinner};
}

module.exports = Game;
