var buffer; // store user input

// action to execute on buffer submit
terminalForm.addEventListener("submit", function (e) {
    e.preventDefault();
    buffer = terminalInput.value;
    bhManage(); // manage buffer history

    if(buffer == "clear")
        cls()
    else
        printf(buffer); // echo input

    terminalInput.value = "";
});