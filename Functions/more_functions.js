"use strict";


function displayMailingLabel(name, address, city, state, zip){
    console.log("name");
    console.log("address");
    console.log("city");
    console.log("state");
    console.log("zip");
}

function addNumbers(num1, num2){
    let result = Number(num1) + Number(num2);
    console.log(num1 + " + " + num2 + " = " + result);
}

function displayReceipt(totalDue, amountPaid){
    let changeDue = totalDue - amountPaid;
    if(changeDue > 0){
        let message = "Please pay the due amount of " + changeDue

        console.log("Total Due: $" + totalDue)
    }
    
}