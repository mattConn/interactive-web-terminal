var buffer; // store user input

// action to execute on buffer submit
terminalForm.addEventListener("submit", function (e) {
    e.preventDefault();

    buffer = terminalInput.value;

    // manage buffer history
    bufferHistory.shift();
    bufferHistory.unshift(buffer);
    bufferHistory.unshift("");

    bhIndex = 0; // reset buffer history index

    if(buffer == "clear")
        cls()
    else
        printf(buffer); // echo input

    terminalInput.value = "";
});