function add(){
    // Defines the 'add' function that will perform the addition operation when called

    let a = document.getElementById("aValue").value;
    // Retrieves the value from the input element with id "aValue" and assigns it to variable 'a'

    let b = document.getElementById("bValue").value;
    // Retrieves the value from the input element with id "bValue" and assigns it to variable 'b'

    console.log("Sum = " + (Number(a) + Number(b)));
    // Converts both 'a' and 'b' from strings to numbers using Number(), adds them,
    // and logs the result to the browser's console prefixed with "Sum = "
}

function sub(){
    // Defines the 'sub' function that performs subtraction

    let a = document.getElementById("aValue").value;
    // Retrieves the value from the input element with id "aValue" and assigns it to variable 'a'

    let b = document.getElementById("bValue").value;
    // Retrieves the value from the input element with id "bValue" and assigns it to variable 'b'

    console.log("Sub = " + (Number(a) - Number(b)));
    // Converts the retrieved values to numbers, subtracts 'b' from 'a',
    // and logs the result to the console with the label "Sub = "
}

function mul(){
    // Defines the 'mul' function that performs multiplication

    let a = document.getElementById("aValue").value;
    // Retrieves the value from the input element with id "aValue" and assigns it to variable 'a'

    let b = document.getElementById("bValue").value;
    // Retrieves the value from the input element with id "bValue" and assigns it to variable 'b'

    console.log("Mul = " + (Number(a) * Number(b)));
    // Converts both values to numbers, multiplies them,
    // and logs the product to the console with the prefix "Mul = "
}

function div(){
    // Defines the 'div' function that performs division

    let a = document.getElementById("aValue").value;
    // Retrieves the value from the input element with id "aValue" and assigns it to variable 'a'

    let b = document.getElementById("bValue").value;
    // Retrieves the value from the input element with id "bValue" and assigns it to variable 'b'

    console.log("Div = " + (Number(a) / Number(b)));
    // Converts both values to numbers, divides 'a' by 'b',
    // and logs the result to the console prefixed with "Div = "
}
