const through2 = require('through2');

const caesar = (inputText, shift) => {
    let output = '';

    for (let i = 0; i < inputText.length; i++) {

        let c = inputText.charCodeAt(i);
        if (c === 231)
            c = 99;
        if (c === 199)
            c = 67;

        if (c >= 65 && c <=  90) {
            output += String.fromCharCode((c - 65 + shift) % 26 + 65)
        }
        else if (c >= 97 && c <= 122) {
            output += String.fromCharCode((c - 97 + shift) % 26 + 97)
        }
        else {
            output += inputText.charAt(i)
        }
    }
    return output
}

module.exports = (action, shift) => {
    return through2(function (chunk, enc, callback) {
        const text = chunk.toString().trim();
        if (action === 'encode') {
            chunk = caesar(text, Number(shift))
        } else if (action === 'decode') {
            chunk = caesar(text, (26 - Number(shift)) % 26)
        }
        this.push(chunk);
        callback();
    });
}

