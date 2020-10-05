## Caesar Cipher CLI

**Install:** 

- `git clone https://github.com/Maxvvellh0use/caesar-cipher`
- run `npm install`

**Usage:**

`$ node index.js --action <encode|decode> --shift <number> [--input <input>] [--output <output>]`

**Options:**

- -s, --shift <number> - How many characters to shift
- -i, --input <fileName> - File path for encryption / decryption
- -o, --output <filePath> - File path for recording the encryption / decryption result
- -a, --action <encode/decode> - specify <encode> for encryption, <decode> - for decryption

**Example usage**

`$ node my_caesar_cli -a encode -s 7 -i "./input.txt" -o "./output.txt"`

`$ node my_caesar_cli --action encode --shift 7 --input plain.txt --output encoded.txt`

`$ node index.js --action encode --shift 7 --input text.txt --output encoded.txt`

Result:

- input.txt: "This is secret. Message about "_" symbol!"

- output.txt: "Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!"
