// handle user input
terminalForm.addEventListener("submit", function(e){
    e.preventDefault(); //prevent default form submission
    print(terminalInput.value);
    terminalInput.value = "";
});