"use strict";

var terminalCtn = document.querySelector("#web-terminal");
terminalCtn.innerHTML = "<div id = \"web-terminal-inner\"></div>";
var terminal = document.querySelector("#web-terminal-inner");

var terminalInputHTML = ["<form id=\"web-terminal-form\">", "<input id=\"web-terminal-input\" type=\"text\" placeholder=\"$\" autocomplete=\"off\" autofocus />", "<input type=\"submit\" />", "</form>"];
terminal.insertAdjacentHTML("afterend", terminalInputHTML.join(""));
var terminalInput = document.querySelector("#web-terminal-input");
var terminalForm = document.querySelector("#web-terminal-form");
var buffer = "";
var labelBufferGet = "_GET_BUFFER";
var labelBufferPut = "_PUT_BUFFER";

var get = function get() {
    printStack.push(labelBufferGet);
};

terminalForm.addEventListener("submit", function (e) {
    e.preventDefault();
    buffer = terminalInput.value;
    terminalInput.value = "";
    display();
});

