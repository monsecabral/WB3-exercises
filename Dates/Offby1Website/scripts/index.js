"use strict";
window.onload = init;
 
//input



function init(){
    const submitButton = document.getElementById("submitButton");
    submitButton.onclick = onSubmitButtonClicked;
}

function onSubmitButtonClicked(){
    //get the known values...  (from the textbox)
    const dateTextBox = document.getElementById("dateTextBox");

    //display the result (into the paragraph)
    const paragraph = document.getElementById("paragraph");

    paragraph.innerHTML = dateTextBox.value;

    console.log("clicked.");
}

let d = new Date ();
console.log (d);