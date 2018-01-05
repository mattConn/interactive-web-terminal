// basic styling of terminal
let terminalStyle = [
    "display: block;",
    "width: 735px;",
    "padding: 20px;",
    "color: white;",
    "font-family: monospace;",
    "background-color: #14121f;"
];

let terminal = document.querySelector("#web-terminal"); // terminal element

terminal.style.cssText = terminalStyle.join(""); //apply terminal styles

// print with newline; call with 2nd arg of "false" for no newline
let print = function(text, newline = true){
    let n = newline == false ? "" : "<br>";
    terminal.innerHTML+=`<span>${text}</span>${n}`;
};

print("foo");
print("bar");
print("bar");