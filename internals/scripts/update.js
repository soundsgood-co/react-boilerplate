require('shelljs/global');
var chalk = require('chalk');

var targetPath = process.argv[2];

echo('Start updating project in ' + targetPath);

cd(targetPath);

// Check dirtiness of the target repository
if (exec('git diff-index --quiet HEAD --').code !== 0) {
  echo(chalk.yellow('✗ Target repository is dirty, commit changes before updating it'));
  exit();
}

cd('-');

// Apply modifications to the target project
exec('git checkout-index -f -a --prefix=' + targetPath + '/ && git update-index --ignore-missing --refresh');

cd(targetPath);

// Remove useless scripts from target project
exec('rm ./internals/scripts/create.js && rm ./internals/scripts/update.js');

// Re-remove previously removed files which have been re-added by previous command
exec('git log --all --pretty=format: --name-only --diff-filter=D | sort -u | xargs rm -f');

echo(chalk.green('✓ Update done!'));
exit(0);
