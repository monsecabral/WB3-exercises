"use strict";



function convertCtoF(celsius){
    let fahrenheit;

    fahrenheit = (celsius * 9/5 + 32);

    return fahrenheit;
}


let input = 100;
let output = convertCtoF(input);
console.log(output);

input = 45;
output = convertCtoF(input);
console.log(output);

input = 19;
output = convertCtoF(input);
console.log(output);

input = 0;
output = convertCtoF(input);
console.log(output);

input = -7;
output = convertCtoF(input);
console.log(output);

input = -40;
output = convertCtoF(input);
console.log(output);
