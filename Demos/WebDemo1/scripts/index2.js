"use strict";

window.onload = init;



const helloBtn = document.getElementById("helloBtn");
const goodbyeBtn = document.getElementById("goodbyeBtn");

const output = document.getElementById("output");



function init(){

    helloBtn.onclick = onHelloBtnClick;
    goodbyeBtn.onclick = onGoodbyeBtnClick;
}


function onHelloBtnClick(){

    output.innerHTML = "Hello!2";
}


function onGoodbyeBtnClick(){

    output.innerHTML = "Goodbye!2";
}