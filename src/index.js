const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

const LETTER_LENGTH = 10;

function decode(expr) {
    let sentence = '';
    let morseLetter;
    for(let i = 0; i < expr.length; i+=10){
        morseLetter = decodeCodeInMorse(expr.slice(i, i+10));
        sentence += decodeMorseInLetter(morseLetter);
    }
    return sentence;
}

// str is string with length = 10
function decodeCodeInMorse(str){
    let letter = '';

    if(str === "**********") {
        return " ";
    }

    for(let i = 0; i < LETTER_LENGTH; i += 2){
        if(str.slice(i, i+2) === '10'){
            letter += '.';
        } else if(str.slice(i, i+2) === '11') {
            letter += '-'
        }
    }
    return letter;
}

function decodeMorseInLetter(str){
    if(str === ' '){
        return ' ';
    }

    return MORSE_TABLE[str];
}

module.exports = {
    decode
}