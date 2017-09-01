// Here's our calculator!
const calculator = {
    total: 0,
    add(x, y) {
        return x + y;
    },
    subtract(x, y) {
        return x - y;
    },
    multiply(x, y) {
        return x * y;
    },
    divide(x, y) {
        return x / y;
    },
    calculate(modify, y) {
        return this.total = modify(this.total, y);
    },
    clear() {
        this.total = 0;
    }
};

// Same two changes we made before:
console.log(calculator.calculate(calculator.add, 13));
console.log(calculator.calculate(calculator.subtract, 3));

// Same variable and assignment
var calculate = calculator.calculate;
console.log(calculate(calculator.multiply, 6));
// NaN - Same result


// We can use a method that is found on functions named "call"
// "call" references the function it's called off of ("calculate" in "calculate.call"), and immediately invokes the function
// Its first parameter is the object that we want "this" to point to
// Any other argument that we want to pass into it when it's called follows the first parameter, separated by commas
console.log(calculate.call(calculator, calculator.divide, 5));
// param 1: "calculator" object
// param 2: "calculator.divide", which is the operator we want to use to modify the current total
// param 3: 5 (which will be the value of the "y" parameter)


console.log(calculate.call(calculator, calculator.multiply, 7.5));
// param 1: "calculator" object
// param 2: "calculator.multiply", which is the operator we want to use to modify the current total
// param 3: 7.5 (which will be the value of the "y" parameter)

// The "call" method is useful when we know how many arguments we want to send in and we want to call that function immediately
// In this case, we know that the "calculator.calculate" method will ALWAYS want two arguments, the modifier number and the operator
// But what if we needed to pass in more values?  That's when we need to use "apply".
// Check out the "apply.js" file for that!

// Or what if we want to ensure that the "this" value for a function will always reference the right context, but we don't want to call it immediately?
// That's what "bind" is for!
// Check out the "bind.js" file for that topic!