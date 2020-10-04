const os = require('os');
const fs = require('fs');

module.exports = (filePath) => {
    const outputStream = fs.createWriteStream(filePath, { flags: 'a' });
    outputStream.on('close', function () {
        fs.createWriteStream(filePath, { flags: 'a' }).write(os.EOL);
    });
    return outputStream;
};
