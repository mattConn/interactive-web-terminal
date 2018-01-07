let display = function (html) { //write to terminal
    terminal.innerHTML += html;
};

let span = (text) => `<span>${text}</span>`;

let put = function (string, newline=true) {
    let nl = newline ? "<br>" : "";
    display(span(`${string}${nl}`));
}

let cls = function () {
    for (let i = 0; i < terminalRows; i++) {
        put("<br>");
    }
}