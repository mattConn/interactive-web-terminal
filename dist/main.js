"use strict";

// basic styling of terminal
var terminalStyle = ["display: block;", "width: 735px;", "padding: 20px;", "color: white;", "font-family: monospace;", "background-color: #14121f;"];

var terminal = document.querySelector("#web-terminal");
terminal.style.cssText = terminalStyle.join("");

var print = function print(text) {
    var newline = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    var n = newline == false ? "" : "<br>";
    terminal.innerHTML += "<span>" + text + "</span>" + n;
};

print("foo");
print("bar");
print("bar");

