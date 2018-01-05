let terminalCtn = document.querySelector("#web-terminal"); // terminal container element
terminalCtn.innerHTML = "<div id = \"web-terminal-inner\"></div>"; // create terminal element
let terminal = document.querySelector("#web-terminal-inner"); // get terminal element

// terminal and terminal ctn styles
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

// apply terminal styles
terminalCtn.style.cssText = terminalCtnStyle.join(""); 
terminal.style.cssText = terminalStyle.join("");

let terminalText = []; //content of terminal