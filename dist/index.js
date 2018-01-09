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

// handle user input
var buffer = void 0;
terminalForm.addEventListener("submit", function (e) {
    e.preventDefault();
    buffer = terminalInput.value;

    if (buffer == "clear") cls();else printf(buffer);

    terminalInput.value = "";
});

