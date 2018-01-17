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

let bufferHistory = [];
let bhIndex = 0;

let bhManage = function(){ // manage buffer history on input submit
    bufferHistory.shift();
    bufferHistory.unshift(buffer);
    bufferHistory.unshift("");

    bhIndex = 0;
};

// cycle through terminal history
document.onkeydown = keyCheck;

function keyCheck(e)
{
  let keycode = window.event.keyCode;

  switch (keycode)
  {
    case 38:  // up arrow 
        if(bhIndex < bufferHistory.length-1){
            bhIndex++;
            terminalInput.value = bufferHistory[bhIndex];
        }
	break;

    case 40:  // down arrow 
        if(bhIndex > 0){
            bhIndex--;
            terminalInput.value = bufferHistory[bhIndex];
        }
	break;
  }
}