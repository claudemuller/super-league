const Outcome = require('./enums/outcome');

/**
 * A soccer game that takes care of awarding points to teams
 *
 * @param object data - An object containing the two teams that played and there scores
 */
function Game(data) {
  const [_team1, _team2] = data;
  let _winner = null;

  if (_team1.score > _team2.score) {
    _team1.team.recordOutcome(Outcome.Win);
    _team2.team.recordOutcome(Outcome.Loss);
    _winner = _team1.team;
  } else if (_team1.score < _team2.score) {
    _team2.team.recordOutcome(Outcome.Win);
    _team1.team.recordOutcome(Outcome.Loss);
    _winner = _team2.team;
  } else {
    _team1.team.recordOutcome(Outcome.Draw);
    _team2.team.recordOutcome(Outcome.Draw);
  }

  /**
   * Returns the winner of the game
   *
   * @return Team|array(Team) - The winning team or an array of both teams if the game was a draw
   */
  function getWinner() {
    const winner = _winner ? _winner : _getTeams();
  }

  function _getTeams() {
    const teams = [_team1.team, _team2,team];

    return teams;
  }

  return {getWinner};
}

module.exports = Game;
