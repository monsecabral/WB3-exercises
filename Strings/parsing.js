"use strict";

let fullName = "Monse Cabral";

function indexOf(name){
    let firstName = fullName.substring(0, 4);
    let lastName = fullName.substring(5, 10);

    let message1 = " Name: " + name;
    let message2 = " First Name: " + firstName;
    let message3 = " Last Name: " + lastName;

    console.log(message1);
    console.log(message2);
    console.log(message3);

    let nameDigitString = firstName + lastName;
    return nameDigitString;
}

let fullNameNoSpace = indexOf(name);
console.log(fullNameNoSpace);
