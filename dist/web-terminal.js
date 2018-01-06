"use strict";

var terminalCtn = document.querySelector("#web-terminal");
terminalCtn.innerHTML = "<div id = \"web-terminal-inner\"></div>";
var terminal = document.querySelector("#web-terminal-inner");

var terminalInputHTML = ["<form id=\"web-terminal-form\">", "<input id=\"web-terminal-input\" type=\"text\" placeholder=\"$\" autocomplete=\"off\" />", "<input type=\"submit\" />", "</form>"];
terminal.insertAdjacentHTML("afterend", terminalInputHTML.join(""));
var terminalInput = document.querySelector("#web-terminal-input");
var terminalForm = document.querySelector("#web-terminal-form");
var printStack = [];
var displayStack = [];

var put = function put() {
    var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var newline = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    var nl = newline == false ? "" : "<br>";
    if (text != null) {
        printStack.push("<span>" + text + "</span>" + nl);
    } else {
        printStack.push(labelBufferPut);
    }
};

var labelClearScreen = "_CLEAR_SCREEN";
var rows = 24;
var cls = function cls() {
    printStack.push(labelClearScreen);
};
var clearScreen = function clearScreen() {
    terminal.innerHTML = "";
    displayStack = [];
    for (var i = 0; i < rows; i++) {
        displayStack.push("<br>");
    }terminal.innerHTML = displayStack.join("");
};

var printIndex = 0;
var display = function display() {
    while (printStack[printIndex] != labelBufferGet && printIndex < printStack.length) {

        if (printStack[printIndex] == labelBufferPut) displayStack.unshift("<span>" + buffer + "</span><br>");else if (printStack[printIndex] == labelClearScreen) clearScreen();else displayStack.unshift(printStack[printIndex]);

        displayStack.pop();
        printIndex++;
    }
    if (printIndex <= printStack.length) {
        terminal.innerHTML = displayStack.join("");
        printIndex++;
    }
    if (printIndex == printStack.length + 1) {
        displayStack.unshift("<span>&lt;End of script&gt;</span><br>");
        displayStack.pop();
        terminal.innerHTML = displayStack.join("");
        printIndex++;
    }
};
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

cls();

setTimeout(function () {
    display();
}, 0);

