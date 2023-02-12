var first, second, op = null;
var state = 0;
var input = null;

// this is how I have deliminated our input groupings
const operations = ['+', '-', '*', '/'];
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',]
const equals = '=';

const display = $('#display'); // want to have display as a variable. Its easier

function clear() {
    first = 0, second = 0, op = null;
    state = 0;
    display.val('');
}

function evaluate() {
    first = eval(first + op + second);
}

function s0(input) {
    state = 0;
    clear();
    if (operations.includes(input) || input === equals)
        display.val('');
    else {
        s1(input);
    }
}
function s1(input) {
    state = 1;

    if (numbers.includes(input)) {
        if (first === 0) {
            first = input
        }
        else {
            first += input;
        }
        display.val(first);
    }
    else if (operations.includes(input)) {
        display.val(first);
        s2(input);
    }
    else // case of equals input
        s5();
}
function s2(input) {
    state = 2;
    display.val(first);
    if (operations.includes(input)) {
        op = input;
    }
    else if (numbers.includes(input)) {
        s3(input);
    }
    else // case of equals input
        s5(input);
}
function s3(input) {
    state = 3;
    if (numbers.includes(input)) {
        if (second === 0) {
            second = input
        }
        else {
            second += input;
        }
        display.val(second);
    }
    else if (operations.includes(input)) {
        evaluate();
        second = 0;
        s2(input);
    }
    else {
        s4(input);
    }
}

function s4(input) {
    state = 4;
    if (numbers.includes(input)) {
        clear();
        s1(input);
    }
    else if (operations.includes(input)) {
        second = 0;
        s2(input);
    }
    else {
        evaluate();
        display.val(first);
    }
}

function s5(input) {
    state = 5;
    display.val(first);
    op = null;
    if (operations.includes(input)) {
        s2(input);
    }
    else if (numbers.includes(input)) {
        clear();
        s1(input);
    }
}

$("button").click(function () {
    // receive input then deal with it depending on state.
    input = $(this).html(); // .html() gets the value of the buttons label (symbols allowed) > .val() where symbols not allowed 
    if (input == String.fromCharCode(247)) {
        input = '/';
    }
    if (input === "C") {
        clear();
    }
    // check current state to handle input
    switch (state) {
        case 0:
            s0(input);
            break;
        case 1:
            s1(input);
            break;
        case 2:
            s2(input);
            break;
        case 3:
            s3(input);
            break;
        case 4:
            s4(input);
            break;
        case 5:
            s5(input);
            break;
    }
}

);

clear();