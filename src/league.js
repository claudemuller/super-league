const Game = require('./game');
const Team = require('./team');
const LinkedList = require ('./utils/linkedlist');

function League() {
  let _teams = LinkedList(),
    _games = [];

  function recordGame(gameData) {
    const data = gameData.split(',')
      .map(d => {
        const [teamName, score] = d.trim().split(' '),
          team = _addTeam(teamName);

        return {
          team,
          score
        };
      }),
      game = Game(data);

    _games.push(game);
  }

  function printRankingTable() {
    let i = 1;

    for (let team of _teams.enumerate()) {
      const name = team.getName(),
        points = team.getPoints();

      console.log(`${i}. ${name}, ${points}`);

      i++;
    }
  }

  function _addTeam(teamName) {
    let team = Team(teamName),
      existingTeam = _teams.find(team);

    //console.log(teamName, existingTeam);

    if (existingTeam) {
      return existingTeam;
    }

    _teams.insert(team);

    return team;
  }

  return {
    recordGame,
    printRankingTable
  };
}

module.exports = League;
