// let strNum1 = '123';
// let strNum2 = '9';
// // conversions from string to number
// console.log(strNum1 + strNum2); // => 1239
// console.log(strNum1 - strNum2); // => 114
// console.log(strNum1 > strNum2); // => false

// let num1 = +strNum1;
// let num2 = +strNum2;
// console.log(num1 + num2); // => 132
// console.log(num1 - num2); // => 114
// console.log(num1 > num2); // => true

// let strNumStr = '12.3ab';
// let numStr = +strNumStr;
// console.log(numStr);
// let num = parseInt(strNumStr);
// if (isNaN(numStr)){
//     console.log("numStr is NaN")
// }
// let num10 = 123;
// let strNum10 = "" + num10;
// let strNum16 = num10.toString();
// console.log(strNum10, strNum16);

// conversion from Morse code to number
//symbol "." =>0 , "-" => 1
// function fromMorseToNumber(morseCode){
//     let result = 0;
//     for (let i = 0; i < morseCode.length; i++){
//         let code = morseCode[i] == "." ? 0 : 1;
//         result = result*2 + code;
//     }
//     return result;
// }
// console.log(fromMorseToNumber("-.-."))

// function  fromNumberToMorse(number) {
//     number = Math.abs(number);
//     let res = "";
//     do { 
//             let digit = number % 2;
//             let sym = digit == 0 ? "." : "-";
//             res = sym + res;
//             number = Math.trunc(number / 2);
//     } while (number != 0);
//     return res;
// }
// console.log(fromNumberToMorse(10))


function createLookupTable(base) { //creates lookup table for symbols base from 2 to 36
let handbook = [];

for (let i = 0; i < base; i++){
    handbook[i] = i.toString(base)
}
return handbook;
}
//console.log(createLookupTable(base)); // to see lookuptable in console


function fromNumberToString(number, base) {
    let handbook = createLookupTable(base);
    number = Math.abs(number);
    let stringResult = "";
    do {
        let digit = number % base;
        let symbol = handbook[digit];
        number = Math.trunc(number/base);
        stringResult = symbol + stringResult;
        }
    while (number != 0);
  return stringResult;
}

console.log(fromNumberToString(900550, 36));
console.log(fromNumberToString(46016237, 36));
console.log(fromNumberToString(11483, 2));

function fromStringToNumber(string, base){
    let handbook = createLookupTable(base);
    let numberResult = 0; 
    let number = 0 ;
    for (let i = 0 ; i < string.length; i ++){
        for (let j = 0 ; j < base ; j ++){
            if (string[i] == handbook[j]){
                number = j;
                break;
            }
        }
        numberResult = numberResult * base + number;
    }
return numberResult;
}

console.log(fromStringToNumber("java", 36));
console.log(fromStringToNumber("react", 36));
console.log(fromStringToNumber("10110011011011", 2));


// //getting code from symbol
// console.log("a".charCodeAt(0))

// //getting symbol from code
// console.log(String.fromCharCode(126))

