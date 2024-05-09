"use strict";

window.onload = function(){
    helloBtn.onclick = function(){
        output.innerHTML = "Goodbye!6";    
    }
   
    goodbyeBtn.onclick = function(){
        output.innerHTML = "Hello!6";
    }
}


const helloBtn = document.getElementById("helloBtn");
const goodbyeBtn = document.getElementById("goodbyeBtn");

const output = document.getElementById("output");
