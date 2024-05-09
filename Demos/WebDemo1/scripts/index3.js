"use strict";

window.onload = init;



function init(){

    helloBtn.onclick = onHelloBtnClick;
    goodbyeBtn.onclick = onGoodbyeBtnClick;
}


function onHelloBtnClick(){

    output.innerHTML = "Hello!3";
}


function onGoodbyeBtnClick(){

    output.innerHTML = "Goodbye!3";
}