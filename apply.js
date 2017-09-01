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
    // This method is changed a bit--notice that there is only one parameter--"modify"
    // In this case, the "calculate" method is ready to deal with one or more modifier numbers that are passed in
    calculate(modify) {
        return this.total = [].slice.call(arguments, 1)
            .reduce((total, y) => modify(total, y), this.total);
    },
    clear() {
        this.total = 0;
    }
};

// Same two changes we made before:
console.log(calculator.calculate(calculator.add, 5, 6, 2));
console.log(calculator.calculate(calculator.subtract, 2, 1));

// Same variable and assignment
let calculate = calculator.calculate;
console.log(calculate(calculator.multiply, 6));
// 0 - ???


// We can use a method that is found on functions named "apply"
// "apply" references the function it's called off of ("calculate" in "calculate.apply")
//    to ensure that "this" is referencing what we want inside of it
// Its first parameter is the object that we want "this" to point to
// Any other argument that we want to pass into "calculate" when it's called follows the first parameter as an array
// In this case, the first argument we want to pass into "calculate" is the operator
// And the number modifiers we want to include in the calculation are listed afterward
console.log(calculate.apply(calculator, [ calculator.divide, 5, 2 ]));
// param 1: "calculator" object
// param 2: an array containing three values:
//      "calculator.divide", which is the operator we want to use to modify the current total, and
//      5 and 2 (which the changes will be applied in order of being passed in)

console.log(calculate.apply(calculator, [ calculator.multiply, 6, 5, .5 ]));
// param 1: "calculator" object
// param 2: an array containing four values:
//      "calculator.multiply", which is the operator we want to use to modify the current total, and
//      6, 5, and .5 (which the modifications will be applied in order of being passed in)

// The "apply" method is useful when we don't know how many arguments we want to send in and we want to call that function immediately
// In this case, we know that the "calculator.calculate" method can take the operator and any number of numbers to modify the total
// But what if we know exactly how many values we want to send in?  That's when we can use "call".
// Check out the "call.js" file for that!

// Or what if we want to ensure that the "this" value for a function will always reference the right context, but we don't want to call it immediately?
// That's what "bind" is for!
// Check out the "bind.js" file for that topic!