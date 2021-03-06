// CLASSIC FUNCTION
function name(param) {
    // Do something
}

// ANONYMOUS FUNCTION assigned to a variable
let fn = function() {}

// ANONYMOUS FUNCTION executed directly
// IIFE -> immediately invoked function
(function() {
    alert('Ciao mondo');
}());

// For every element do something in the function
let array = [2, 7, 9, 3, 33, 54];

array.map(function(e) {
    console.log(e);
});

// Another implementation
array.forEach(function(e, _index) {
    console.log(e);
});

// Arrow function
let fn_a = () => {}

(_param) => {
    alert('Ciao mondo');
};

array.forEach((e, _index) => {
    console.log(e);
});

const test = (param) => {
    // Do something
}