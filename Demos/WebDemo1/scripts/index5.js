"use strict";

window.onload = function(){
    helloBtn.onclick = onHelloBtnClick;
    goodbyeBtn.onclick = onGoodbyeBtnClick;
    return undefined;
}



const helloBtn = document.getElementById("helloBtn");
const goodbyeBtn = document.getElementById("goodbyeBtn");

const output = document.getElementById("output");



function onHelloBtnClick(){

    output.innerHTML = "Hello!5";
}


function onGoodbyeBtnClick(){

    output.innerHTML = "Goodbye!5";
}