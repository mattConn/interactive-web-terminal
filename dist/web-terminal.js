"use strict";

var terminalCtn = document.querySelector("#web-terminal");
terminalCtn.innerHTML = "<div id = \"web-terminal-inner\"></div>";
var terminal = document.querySelector("#web-terminal-inner");

var terminalInputHTML = ["<form id=\"web-terminal-form\">", "<input id=\"web-terminal-input\" type=\"text\" placeholder=\"$\" autocomplete=\"off\" autofocus />", "<input type=\"submit\" />", "</form>"];
terminal.insertAdjacentHTML("afterend", terminalInputHTML.join(""));
var terminalInput = document.querySelector("#web-terminal-input");
var terminalForm = document.querySelector("#web-terminal-form");

var textHeight = 15;
var terminalRows = 24;
terminal.style.height = textHeight * terminalRows + "px";
var display = function display(html) {
    terminal.innerHTML += html;
};

var span = function span(text) {
    return "<span>" + text + "</span>";
};

var put = function put(string) {
    var newline = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    var nl = newline ? "<br>" : "";
    display(span("" + string + nl));
};

var cls = function cls() {
    for (var i = 0; i < terminalRows; i++) {
        put("<br>");
    }
};

