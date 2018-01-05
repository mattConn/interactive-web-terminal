"use strict";

var terminalCtn = document.querySelector("#web-terminal");
terminalCtn.innerHTML = "<div id = \"web-terminal-inner\"></div>";
var terminal = document.querySelector("#web-terminal-inner");

var terminalStyle = ["padding: 20px;", "color: white;", "font-family: monospace;", "background-color: #14121f;"];
var terminalCtnStyle = ["display: block;", "width: 735px;"];

terminalCtn.style.cssText = terminalCtnStyle.join("");
terminal.style.cssText = terminalStyle.join("");

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

cls();

