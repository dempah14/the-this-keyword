// We have a simple object we'll call "calculator"
const calculator = {
    // There is a total on it that starts out as 0
    total: 0,
    
    // We have an add method,
    add(x, y) {
        return x + y;
    },
    
    // A subtract method,
    subtract(x, y) {
        return x - y;
    },
    
    // A multiply method,
    multiply(x, y) {
        return x * y;
    },
    
    // And a divide method
    divide(x, y) {
        return x / y;
    },
    
    // In order to modify the total, we use the "calculate" method
    // We first pass in one of the methods defined above that will modify it accordingly (modify)
    // We also pass in a number that will be the magnitude of the modification (y)
    // It then returns the new total so we can see it change
    calculate(modify, y) {
        return this.total = modify(this.total, y);
    },
    
    // This method can be used to start the "total" over from scratch
    clear() {
        this.total = 0;
    },
};

// Let's start our calculations by adding 13 to the current total
console.log(calculator.calculate(calculator.add, 13));

// And then let's subtract 3 from the result
console.log(calculator.calculate(calculator.subtract, 3));

// This "calculator." is driving me crazy!  There HAS to be a way that makes it simpler
// Let's assign that method to another variable we'll name after the method
let calculate = calculator.calculate;

// And let's try to multiply the result by 6
console.log(calculate(calculator.multiply, 6));
// NaN - ???
// Where'd that come from?

/*

This is a common problem in JavaScript, especially with callbacks.
We could be passing the "calculator.calculate" function as a part of a Promise.
We could be assigning it to a variable and using that instead (like we did here).
So what is happening?

"this" refers to the current object context of a function.  When a function is called in reference to an object
like:
```
calculator.calculate(...)
```
or
```
calculator['calculate'](...)
```

or is run inside of another method like:
```
const calculator = {
    ...
    displayTotal() {
        console.log(this.total);
    },
    calculate(modify, y) {
        this.total = modify(this.total, y);
        this.displayTotal();
        return this.total;
    },
    ...
};
```
in reference to "this.displayTotal", since it's being run inside of the "calculate" method (this also works
if "displayTotal" isn't a method but instead a separate function that still uses the "this" keyword and runs 
inside of the "calculate" method).

The reason why it breaks is when the "calculate" method is assigned to a separate variable, and that
function is run not in reference to the "calculator" object like:
```
calculate(...)
```
it no longer is referencing the "calculator" object, and in this case, since the function isn't being run inside
of any other object, it's referencing the global object instead ("global" if in Node, "window" if in browser).

As such, we're going to need to ensure that "this" references the right object.

There are three different strategies that we can use in order to ensure that we don't get this problem.
In this same folder, they can be found in "bind.js", "call.js", and "apply.js".

*/
