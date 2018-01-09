let terminalCtn = document.querySelector("#web-terminal-ctn"); // get terminal container element
let terminal = document.querySelector("#web-terminal"); // get terminal element
let terminalInput = document.querySelector("#web-terminal-input"); // get input element
let terminalForm = document.querySelector("#web-terminal-form"); // get input form element

let display = function (html) { //write to terminal
    terminal.insertAdjacentHTML("afterbegin", html);
};

let htmlElement = (element,text) => `<${element}>${text}</${element}>`;

let printf = function (string, newline = true) { //format, write to terminal
    let nl = newline ? "<br>" : "";
    display(`${htmlElement("span",string)}${nl}`);
}

let fontHeight = 15;
let cls = function () { // clear screen
    for (let i = 0; i <= terminal.clientHeight/fontHeight; i++) {
        printf("");
    }
}

// handle user input
let buffer;
terminalForm.addEventListener("submit", function (e) {
    e.preventDefault();
    buffer = terminalInput.value;

    if(buffer == "clear")
        cls()
    else
        printf(buffer);

    terminalInput.value = "";
});