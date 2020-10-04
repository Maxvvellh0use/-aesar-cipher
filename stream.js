const fs = require('fs');
const { pipeline } = require('stream');


const inputStream = require('./inputStream');
const transformStream = require('./transformStream');
const outputStream = require('./outputStream');
module.exports = async (action, shift, inputFilePath, outputFilePath) => {
    console.log('Проверка:  ', action, shift, inputFilePath, outputFilePath)

    if (!action || !shift || !inputFilePath || !outputFilePath) {
        console.error('Enter all data!');
        process.exit(1);
    } else if (!fs.existsSync(inputFilePath)) {
        console.error('Input file doesnt exist!');
    } else if (!fs.existsSync(outputFilePath)) {
        console.error('Output file doesnt exist!');
    }


    pipeline(
        await inputStream(inputFilePath),
        await transformStream(action, shift),
        await outputStream(outputFilePath),
        (error) => {
            if (error) {
                console.error('Error ' + error);
            }
        },
    );
};
