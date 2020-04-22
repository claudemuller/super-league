const Game = require('./game');
const Team = require('./team');
const LinkedList = require ('./utils/linkedlist');

/**
 * The league that orchestrates the league's games
 */
function League() {
  let _teams = LinkedList(),
    _games = [];

  /**
   * Record the game and add the teams to the league
   *
   * @param string data - The input string that describes the team names and their scores
   */
  function recordGame(data) {
    const gameData = data
      .trim()
      .split(',')
      .map(d => {
        const splitIndex = d.lastIndexOf(' '),
          score = d.substring(splitIndex + 1),
          teamName = d.substring(0, splitIndex).trim();
          existingTeam = _teams.find(teamName);
          team = existingTeam ? existingTeam : Team(teamName);

        return {
          team,
          score
        };
      }),
      game = Game(gameData);

    gameData.forEach(d => _addTeam(d.team));
    _games.push(game);
  }

  /**
   * Print the points ranking table
   */
  function printRankingTable() {
    let i = 1;

    for (let team of _teams.enumerate()) {
      const name = team.getName(),
        points = team.getPoints();

      console.log(`${i}. ${name}, ${points}`);

      i++;
    }
  }

  function _addTeam(team) {
    _teams.insert(team)
  }

  return {
    recordGame,
    printRankingTable
  };
}

module.exports = League;
