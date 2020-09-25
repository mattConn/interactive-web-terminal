const terminalCtn = document.querySelector("#web-terminal-ctn"); // get terminal container element
const terminal = document.querySelector("#web-terminal"); // get terminal element
const terminalInput = document.querySelector("#web-terminal-input"); // get input element
const terminalForm = document.querySelector("#web-terminal-form"); // get input form element

//write to terminal
const display = html => terminal.insertAdjacentHTML("beforeend", html);

const htmlElement = (element,text) => `<${element}>${text}</${element}>`;

const printf = function (string, newline = true) { //format, write to terminal
    const nl = newline ? "<br>" : "";
    display(`${htmlElement("span",string)}${nl}`);
}

const fontHeight = 15;
const cls = () => { // clear screen
	terminal.innerHTML="";
}

const bufferHistory = [];
let bhIndex = 0;

const bhManage = function(){ // manage buffer history on input submit
    bufferHistory.shift();
    bufferHistory.unshift(buffer);
    bufferHistory.unshift("");

    bhIndex = 0;
};

// cycle through terminal history
const keyCheck = e =>
{
  const keycode = window.event.keyCode;

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

document.onkeydown = keyCheck;
