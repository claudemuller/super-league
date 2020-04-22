const Outcome = require('./enums/outcome');

/**
 * A soccer game that takes care of awarding points to teams
 *
 * @param object data - An object containing the two teams that played and there scores
 */
function Game(data) {
  const [_team1, _team2] = data;

  if (_team1.score > _team2.score) {
    _team1.team.recordOutcome(Outcome.Win);
    _team2.team.recordOutcome(Outcome.Loss);
  } else if (_team1.score < _team2.score) {
    _team2.team.recordOutcome(Outcome.Win);
    _team1.team.recordOutcome(Outcome.Loss);
  } else {
    _team1.team.recordOutcome(Outcome.Draw);
    _team2.team.recordOutcome(Outcome.Draw);
  }
}

module.exports = Game;
