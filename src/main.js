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
