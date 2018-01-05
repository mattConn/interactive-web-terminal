let terminalCtn = document.querySelector("#web-terminal"); // terminal container element
terminalCtn.innerHTML = "<div id = \"web-terminal-inner\"></div>"; // create terminal element
let terminal = document.querySelector("#web-terminal-inner"); // get terminal element
let terminalInputHTML = "<input id=\"web-terminal-input\" type=text placeholder=\">\">"; // text input for terminal
terminal.insertAdjacentHTML("afterend",terminalInputHTML); // insert input after terminal in ctn
let terminalInput = document.querySelector("#web-terminal-input");

let terminalText = []; //content of terminal