#include terminal_setup.es6
#include io_functions.es6

let i = 0;
setTimeout(function () {
    while (i < printStack.length) {
        display(printStack[i]);
        i++;
    }
}, 0);