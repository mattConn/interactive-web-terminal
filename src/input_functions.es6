let buffer = ""; // input buffer 
const labelBufferGet = "_GET_BUFFER"; // mark when to check input
const labelBufferPut = "_PUT_BUFFER"; // mark when to use input

// mark when to check input
let get = function(){
    printStack.push(labelBufferGet);
};

// handle user input
terminalForm.addEventListener("submit", function(e){
    e.preventDefault(); //prevent default form submission
    buffer = terminalInput.value;
    terminalInput.value = "";
    display();
});