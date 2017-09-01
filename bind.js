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
let calculate = calculator.calculate;
console.log(calculate(calculator.multiply, 6));
// NaN - Same result


// We can use a method that is found on functions named "bind"
// "bind" references the function it's called off of ("calculate" in "calculate.bind") to ensure that "this" is referencing what we want
// Its first parameter is the object that we want "this" to point to
// Any other argument that we want to pass into it when it's called follows the first parameter, separated by commas
// In this case, we don't want any specific values to default in the parameters
calculate = calculator.calculate.bind(calculator);
// param 1: "calculator" object

// Now, whenever we call "calculate", it will _always_ refer to the "calculator" object
console.log(calculate(calculator.divide, 5));
// param 1: "calculator.divide", which is the operator we want to use to modify the current total
// param 2: 5 (which will be the value of the "y" parameter)

console.log(calculate(calculator.multiply, 7.5));
// param 1: "calculator.multiply", which is the operator we want to use to modify the current total
// param 2: 7.5 (which will be the value of the "y" parameter)



// The "bind" method is useful in a couple of different scenarios:
//   1. When we want to ensure that the "this" keyword inside of the given function will ALWAYS be a specific object
//   2. When we want to default parameters based on the context

// For the second case, say we want to make a function that specializes in multplying the given value to the total
// We can use "bind" in order to ensure the first parameter passed into the function is the "calculator.multiply":
const multiply = calculator.calculate.bind(calculator, calculator.multiply);

// Now whenever we run "multiply", we can specify only one value, the operator:
console.log(multiply(.4));
console.log(multiply(3));


// But what if we want to call the function immediately?  We can do one of three things:
//   1. invoke it immediately:
console.log(calculator.calculate.bind(calculator, calculator.subtract, 8)());
//   2. use "call" (check out the "call.js" file for tips on that!)
//   3. use "apply" (useful if you're not sure how many arguments you're wanting to pass to a function; check out the "apply.js" file for tips on that!)