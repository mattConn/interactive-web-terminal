let terminalCtn = document.querySelector("#web-terminal"); // terminal container element
terminalCtn.innerHTML = "<div id = \"web-terminal-inner\"></div>"; // create terminal element
let terminal = document.querySelector("#web-terminal-inner"); // get terminal element
let terminalInputHTML = "<input id=\"web-terminal-input\" type=text placeholder=\"Input\">"; // text input for terminal
terminal.insertAdjacentHTML("afterend",terminalInputHTML); // insert input after terminal in ctn
let terminalInput = document.querySelector("#web-terminal-input");

// terminal, terminal ctn and terminal input styles
let terminalStyle = [
    "padding: 20px;",
    "color: white;",
    "font-family: monospace;",
    "background-color: #14121f;"
];
let terminalCtnStyle = [
    "display: block;",
    "width: 735px;",
];
let terminalInputStyle = [
    "display: block;",
    "width: 100%;",
    "border: none;",
    "border-top: solid 1px white;",
    "color: white;",
    "font-family: monospace;",
    "background-color: #14121f;"
];

// apply terminal styles
terminalCtn.style.cssText = terminalCtnStyle.join(""); 
terminal.style.cssText = terminalStyle.join("");
terminalInput.style.cssText = terminalInputStyle.join("");

let terminalText = []; //content of terminal