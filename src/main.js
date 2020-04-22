const fs = require('fs');
const Outcome = require('./enums/outcome');
const League = require('./league');
const Team = require('./team');

const superLeague = League(),
  filename = process.argv[2];

if (!filename) {
  console.error('Error: no input file.');
  console.log('npm usage:', 'npm start <data_file>');
  console.log('raw usage:', process.argv[0], process.argv[1], '<data_file>');
  process.exit();
}

try {
  const data = fs.readFileSync(filename, 'UTF-8'),
    lines = data.trim().split(/\r?\n/);

  lines.forEach(line => superLeague.recordGame(line));

  superLeague.printRankingTable();
} catch (err) {
  console.error(err);
}

//superLeague.recordGame('Lions 1, Snakes 3');
//superLeague.recordGame('Tarantulas 1, FC Awesome 0');
//superLeague.recordGame('Lions 1, FC Awesome 2');
//superLeague.recordGame('Snakes 1, Lions 2');
//superLeague.recordGame('Snails 1, Big Dogs 2');
//superLeague.recordGame('Lions 1, Snakes 3');
//superLeague.recordGame('Lions 1, FC Awesome 2');
//superLeague.recordGame('Snakes 1, Lions 2');
//superLeague.recordGame('Snails 1, Lions 2');
//superLeague.recordGame('Cats 1, FC Awesome 0');
//superLeague.recordGame('Lions 1, Big Dogs 2');
