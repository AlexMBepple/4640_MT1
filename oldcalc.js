/*
Author: Alex Bepple
*/

var first = { value: null }, second = { value: null }, operation = { op: null }, output = { out: 0 }, recent = {value:null};



function calculate() {
    var result;
    if(operation.op == String.fromCharCode(247)){
        operation.op = '/';
        result = parseFloat(result);
    }

    if(recent.value != operation.op && operation.op != null)
    { 
        if(second.value === null){
            second.value = output.out;
        }
        result = eval(first.value+ operation.op + second.value);
        output.out = result;
        $("input").val(output.out);
        first.value = result;
        recent.value = 'm';
    }
}

function clear() {
    first.value = null;
    second.value = null;
    operation.op = null;
    recent.value = null;
    output.out = '0';
}


function operator(operator){
    if(first.value != null && (second.value != null || output.out != null) && operation.op != null && recent.value != operator.op && recent.value !== '='){ // evaluate before changing operator
        console.log('oof')
        calculate();
    }

    operation.op = operator;
    if (first.value == null){
        first.value = output.out;
        output.out = '0';
        operation.op = operator;
        $("input").val(output.out);
    }
    else if(operation.op == operator)
        calculate()
    else{
        second.value = output.out;
        output.out = '0';
        operation.op = operator;
        calculate()
    }
}

$("button").click(function () {
    if ($(this).val() != "") { // numbers
        if(recent.value === '='){
            clear();
        }
        if(recent.value === 'm'){
            output.out = '0';
        }
        if(output.out == '0')
            output.out = $(this).val();
        else
            output.out += $(this).val();
        $("input").val(output.out);
    }
    else {// operations
        var swing = $(this).html();
        switch (swing) {
            case 'C':
                clear();
                $("input").val(output.out);
                break;
            case '=':
                calculate();
                break;
            default:
                operator(swing);
                break;
        }
    }
    recent.value = $(this).text();
}

);
