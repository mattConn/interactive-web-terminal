let printStack = []; // array of content to be displayed in terminal
let displayStack = []; // content currently being displayed

// add to printStack with newline; call with 2nd arg of "false" for no newline
let put = function(text = null, newline = true){
    let nl = newline == false ? "" : "<br>";
    if(text != null){
        printStack.push(`<span>${text}</span>${nl}`);
    } else {
        printStack.push(labelBufferPut); // put user input
    }
};

const labelClearScreen = "_CLEAR_SCREEN"; // label when to clear screen
const rows = 24; // height of terminal
let cls = function(){ // mark when to clear terminal
    printStack.push(labelClearScreen);
}
let clearScreen = function(){ // clear terminal
    terminal.innerHTML = "";
    displayStack = [];
    for(let i = 0; i < rows; i++)
        displayStack.push("<br>");
    terminal.innerHTML = displayStack.join("");
}

let printIndex = 0;
let display = function () {
    while (printStack[printIndex] != labelBufferGet && printIndex < printStack.length) {

        if(printStack[printIndex] == labelBufferPut) // use input
            displayStack.unshift(`<span>${buffer}</span><br>`);
        else if(printStack[printIndex] == labelClearScreen) // clear screen 
            clearScreen();
        else 
            displayStack.unshift(printStack[printIndex]); // use print

        displayStack.pop();
        printIndex++;
    }
    if(printIndex <= printStack.length)
    {
        terminal.innerHTML = displayStack.join("");
        printIndex++; // jump over buffer label 
    }
    if(printIndex == printStack.length+1)
    {
        displayStack.unshift(`<span>&lt;End of script&gt;</span><br>`);
        displayStack.pop();
        terminal.innerHTML = displayStack.join("");
        printIndex++;
    }
}