const program = require('commander');
const stream = require('./stream')

program
    .storeOptionsAsProperties(true)
    .version('1.0.0')
    .option('-s, --shift <number>', 'shift value')
    .option('-a, --action <encode|decode>', 'action value')
    .option('-i, --input <input>', 'input file')
    .option('-o, --output <output>', 'output file')
    .action(async () => {
        await stream(program.action, program.shift, program.input, program.output);
    })
    .parse(process.argv);

