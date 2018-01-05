"use strict";

var terminalCtn = document.querySelector("#web-terminal");
terminalCtn.innerHTML = "<div id = \"web-terminal-inner\"></div>";
var terminal = document.querySelector("#web-terminal-inner");

var terminalInputHTML = ["<form id=\"web-terminal-form\">", "<input id=\"web-terminal-input\" type=\"text\" placeholder=\"$\" autocomplete=\"off\" />", "<input type=\"submit\" />", "</form>"];
terminal.insertAdjacentHTML("afterend", terminalInputHTML.join(""));
var terminalInput = document.querySelector("#web-terminal-input");
var terminalForm = document.querySelector("#web-terminal-form");

var terminalText = [];

var print = function print(text) {
    var newline = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    var nl = newline == false ? "" : "<br>";
    terminalText.unshift("<span>" + text + "</span>" + nl);
    terminalText.pop();
    terminal.innerHTML = terminalText.join("");
};

var rows = 24;
var cls = function cls() {
    for (var i = 0; i < rows; i++) {
        terminalText[i] = "<br>";
    }terminal.innerHTML = terminalText.join("");
};

terminalForm.addEventListener("submit", function (e) {
    e.preventDefault();
    print(terminalInput.value);
    terminalInput.value = "";
});

cls();

