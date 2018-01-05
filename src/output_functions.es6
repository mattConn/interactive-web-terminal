// print with newline; call with 2nd arg of "false" for no newline
let print = function(text, newline = true){
    let nl = newline == false ? "" : "<br>";
    terminalText.unshift(`<span>${text}</span>${nl}`);
    terminalText.pop();
    terminal.innerHTML = terminalText.join("");
};

const rows = 24; // height of terminal
let cls = function(){ // clear terminal
    for(let i = 0; i < rows; i++)
        terminalText[i] = "<br>";
    terminal.innerHTML = terminalText.join("");
} 