"use strict";

let fullName = "Monse Cabral";

function indexOf(fullName){
    let firstName = fullName.substring(0, 5);
    let lastName = fullName.substring(6, 12);

    let message1 = " Name: " + fullName;
    let message2 = " First Name: " + firstName;
    let message3 = " Last Name: " + lastName;

    console.log(message1);
    console.log(message2);
    console.log(message3);

    let nameDigitString = firstName + lastName;
    return nameDigitString;
}

let fullNameSpace = indexOf(fullName);
console.log(fullNameSpace);
