const userPrompt = 'Type anything for ';

const msg = [
	'This is an interactive web terminal. Type anything or press enter for more info.',
	'Type "clear" to clear screen. The up and down arrow keys will cycle through your history.',
	'You can edit how the terminal handles input in "script.js" (You can copy and rename "script-template.js" for a blank template).',
	'Source code at: <a href="https://github.com/mattConn/interactive-web-terminal">github.com/mattConn/interactive-web-terminal</a>'
];

let buffer; // store user input

// initial msg
printf('$ '+msg.shift());

// handle buffer submit
terminalForm.addEventListener("submit", e => {
    e.preventDefault();
    buffer = terminalInput.value;
    bhManage(); // manage buffer history

     
	if(buffer.length) printf('> '+buffer); // echo input

	switch(buffer)
	{
		case 'clear':
			cls();
			break;

		default:
			if(msg.length) printf('$ '+msg.shift());
	}

    terminalInput.value = "";
});
