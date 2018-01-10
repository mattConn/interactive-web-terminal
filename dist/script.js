// handle user input; on user submission, perform some action
var buffer;
terminalForm.addEventListener("submit", function (e) {
    e.preventDefault();
    buffer = terminalInput.value;

    if(buffer == "clear")
        cls()
    else
        printf(buffer);

    terminalInput.value = "";
});