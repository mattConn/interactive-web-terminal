"use strict";

var terminalCtn = document.querySelector("#web-terminal-ctn"); // get terminal container element
var terminal = document.querySelector("#web-terminal"); // get terminal element
var terminalInput = document.querySelector("#web-terminal-input"); // get input element
var terminalForm = document.querySelector("#web-terminal-form"); // get input form element

var display = function display(html) {
    //write to terminal
    terminal.insertAdjacentHTML("afterbegin", html);
};

var htmlElement = function htmlElement(element, text) {
    return "<" + element + ">" + text + "</" + element + ">";
};

var printf = function printf(string) {
    var newline = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    //format, write to terminal
    var nl = newline ? "<br>" : "";
    display("" + htmlElement("span", string) + nl);
};

var fontHeight = 15;
var cls = function cls() {
    // clear screen
    for (var i = 0; i <= terminal.clientHeight / fontHeight; i++) {
        printf("");
    }
};

var bufferHistory = [];
var bhIndex = 0;

var bhManage = function bhManage() {
    // manage buffer history on input submit
    bufferHistory.shift();
    bufferHistory.unshift(buffer);
    bufferHistory.unshift("");

    bhIndex = 0;
};

// cycle through terminal history
document.onkeydown = keyCheck;

function keyCheck(e) {
    var keycode = window.event.keyCode;

    switch (keycode) {
        case 38:
            // up arrow 
            if (bhIndex < bufferHistory.length - 1) {
                bhIndex++;
                terminalInput.value = bufferHistory[bhIndex];
            }
            break;

        case 40:
            // down arrow 
            if (bhIndex > 0) {
                bhIndex--;
                terminalInput.value = bufferHistory[bhIndex];
            }
            break;
    }
}

