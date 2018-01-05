// creating terminal elements
//
let terminalCtn = document.querySelector("#web-terminal"); // get terminal container element
terminalCtn.innerHTML = "<div id = \"web-terminal-inner\"></div>"; // create terminal element
let terminal = document.querySelector("#web-terminal-inner"); // get terminal element

// creating terminal input elements
//
// terminal input html
let terminalInputHTML = [
    "<form id=\"web-terminal-form\">",
        "<input id=\"web-terminal-input\" type=\"text\" placeholder=\"$\" autocomplete=\"off\" />",
        "<input type=\"submit\" />",
    "</form>"
]
terminal.insertAdjacentHTML("afterend", terminalInputHTML.join("")); // insert input after terminal in ctn
let terminalInput = document.querySelector("#web-terminal-input"); // get input element
let terminalForm = document.querySelector("#web-terminal-form"); // get input form element

let terminalText = []; // array of content to be displayed in terminal