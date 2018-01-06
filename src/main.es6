#include terminal_setup.es6
#include output_functions.es6
#include input_functions.es6

cls(); // clear terminal for initial run

// initial display of text from printStack until user input needed
setTimeout(function(){
    display();
},0)