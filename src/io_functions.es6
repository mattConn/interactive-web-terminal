let printStack = [];

let display = function (html) { //write to terminal
    terminal.insertAdjacentHTML("afterbegin", html);
};

let span = (text) => `<span>${text}</span>`;

let put = function (string, newline = true) {
    let nl = newline ? "<br>" : "";
    printStack.push(`${span(string)}${nl}`);
}

let cls = function () {
    for (let i = 0; i <= terminalRows; i++) {
        put("");
    }
}

terminalForm.addEventListener("submit", function (e) {
    e.preventDefault();
    terminalInput.value = "";
});