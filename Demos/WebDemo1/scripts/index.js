"use strict";

window.onload = init;

function init(){
    const helloBtn = document.getElementById("helloBtn");
    const goodbyeBtn = document.getElementById("goodbyeBtn");

    helloBtn.onclick = onHelloBtnClick;
    goodbyeBtn.onclick = onGoodbyeBtnClick;
}


function onHelloBtnClick(){
    const output = document.getElementById("output");
    output.innerHTML = "Hello!";
}


function onGoodbyeBtnClick(){
    const output = document.getElementById("output");
    output.innerHTML = "Goodbye!";
}