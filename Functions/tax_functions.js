"use strict";


function getSocSecTax(){
    let socSecTax = (grossPay * 6.2) / 100;
    return socSecTax;
}

function getMedicareTax(grossPay){
    let medCareTax = (grossPay * 1.4) / 100;
    return medCareTax;
}

function getFederalTax(grossPay, withholdingCode){
    let taxRate;
    if(withholdingCode == "0"){
        taxRate = 23;
    }
    else if (withholdingCode == "1"){
        taxRate = 21;
    }
    else if(withholdingCode == "2"){
        taxRate = 19.5;
    }
    else if (withholdingCode == "3"){
        taxRate = 18.5;
    }
    else if (withholdingCode >= "4"){
        taxRate = 18 - ((withholdingCode - 4) * (0.5));
    }

    let federalTaxWithholding = (grossPay * taxRate) / 100;

    return federalTaxWithholding;
}

console.log(getSocSecTax(1000));

console.log(getMedicareTax(1000));

console.log(getFederalTax(750,0));

console.log(getFederalTax(1550,2));

console.log(getFederalTax(1100,6));

