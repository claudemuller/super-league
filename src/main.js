const Outcome = require('./enums/outcome');
const League = require('./league');
const Team = require('./team');

const superLeague = League();

superLeague.recordGame('Lions 1, Snakes 3');
superLeague.recordGame('Lions 1, FCAwesome 1');
superLeague.recordGame('Tarantulas 1, FCAwesome 0');
//superLeague.recordGame('Tarantulas 1, FC Awesome 0');
//superLeague.recordGame('Lions 1, FC Awesome 2');
//superLeague.recordGame('Snakes 1, Lions 2');

superLeague.printRankingTable();
