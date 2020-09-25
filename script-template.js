let buffer; // store user input

// handle buffer submit
terminalForm.addEventListener("submit", e => {
    e.preventDefault();
    buffer = terminalInput.value;
    bhManage(); // manage buffer history


	/*============================================*/
	/* Replace this block with your submit actions */

    if(buffer == "clear")
        cls()
    else
        printf(buffer); // echo input

	/*                                            */
	/*============================================*/

    terminalInput.value = "";
});
