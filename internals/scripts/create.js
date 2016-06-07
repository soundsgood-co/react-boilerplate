require('shelljs/global');
var chalk = require('chalk');

var targetPath = process.argv[2];

echo('Creating new project in ' + targetPath);

// Check if folder already exist
if (exec('test -d ' + targetPath).code === 0) {
  echo(chalk.yellow('✗ Target folder already exist'));
  exit();
}

// Create new project from the boilerplate
exec('git checkout-index -a --prefix=' + targetPath + '/');

cd(targetPath);

// Remove useless scripts from target project
exec('rm ./internals/scripts/create.js && rm ./internals/scripts/update.js');

// Init git tracking
exec('git init && git add . && git commit -m "Initial commit"');

echo(chalk.green('✓ Creation done!'));
exit(0);
