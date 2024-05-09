"use strict";

window.onload = init;


const hb = document.getElementById("helloBtn");
const gb = document.getElementById("goodbyeBtn");

const output = document.getElementById("output");



function init(){

    hb.onclick = onHelloBtnClick;
    gb.onclick = onGoodbyeBtnClick;
}


function onHelloBtnClick(){

    o.innerHTML = "Hello!4";
}


function onGoodbyeBtnClick(){

    o.innerHTML = "Goodbye!4";
}