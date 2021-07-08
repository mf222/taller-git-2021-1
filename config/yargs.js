const argv = require('yargs')
    .option('n',{
        alias: 'name',
        type: 'string',
        demandOption: true
    })
    .argv;

module.exports = argv;
