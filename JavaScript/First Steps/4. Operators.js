// + operates is a binary operator, it takes two operands and returns a single value (operand1 + operand2)
        // when operating on strings it concatenates them
        console.log("Hello " + "World"); // "HelloWorld"

        // when operating on numbers it adds them
        console.log(1 + 2); // 3

        // when operating on a number and a string it concatenates them
        console.log(1 + "2"); // "12"

        // when operating on arrays it concatenates them
        console.log([1, 2] + [3, 4]); // "1,23,4"

        // when operating on objects it returns a string
        console.log({} + {}); // "[object Object][object Object]"

        // when operating on booleans it adds them
        console.log(true + false); // 1

        // when operating on null or undefined it returns NaN
        console.log(null + undefined); // NaN

// Arithmetic operators include +, -, *, /, %, ++, and --. (They are binary operators, except for ++ and -- which are unary operators.)

    // - is a binary operator, it subtracts the second operand from the first
    console.log(3 - 2); // 1

    // * is a binary operator, it multiplies the two operands
    console.log(3 * 2); // 6

    // / is a binary operator, it divides the first operand by the second
    console.log(3 / 2); // 1.5

    // % is a binary operator, it returns the remainder of the first operand divided by the second
    console.log(3 % 2); // 1

    // ++ is a unary operator, it increments the operand by 1 (unary means it only takes one operand)
    let x = 3;
    console.log(x++); // 4

    // -- is a unary operator, it decrements the operand by 1
    let y = 3;
    console.log(y--); // 2

    // Order of operations:
    // 1. Parentheses
    // 2. Exponents
    // 3. Multiplication and division
    // 4. Addition and subtraction
    // 5. Left to right


// Comparison operators include ==, ===, !=, !==, >, <, >=, and <=. (They are binary operators.)

    // == is a binary operator, it checks if the two operands are equal (it does type coercion)
    console.log(3 == 3); // true
    console.log(3 == "3"); // true (because the types are different, but the values are the same)

    // === is a binary operator, it checks if the two operands are equal (it does not do type coercion)
    console.log(3 === 3); // true
    console.log(3 === "3"); // false (because the types are different)

    // != is a binary operator, it checks if the two operands are not equal (it does type coercion)
    console.log(3 != 3); // false
    console.log(3 != "3"); // false (because the types are different, but the values are the same)

    // !== is a binary operator, it checks if the two operands are not equal (it does not do type coercion)
    console.log(3 !== 3); // false
    console.log(3 !== "3"); // true (because the types are different)

    // > is a binary operator, it checks if the first operand is greater than the second
    console.log(3 > 2); // true

    // < is a binary operator, it checks if the first operand is less than the second
    console.log(3 < 2); // false

    // >= is a binary operator, it checks if the first operand is greater than or equal to the second
    console.log(3 >= 2); // true
    console.log(3 >= 3); // true

    // <= is a binary operator, it checks if the first operand is less than or equal to the second
    console.log(3 <= 2); // false
    console.log(3 <= 3); // true

// Logical operators include &&, ||, and !. (They are binary operators, except for ! which is a unary operator.)

    // && is a binary operator, it returns true if both operands are true
    console.log(true && true); // true

    // || is a binary operator, it returns true if at least one of the operands is true
    console.log(true || false); // true

    // ! is a unary operator, it returns the opposite of the operand (true becomes false, and false becomes true)
    console.log(!true); // false (inverse of true)
    console.log(!false); // true (inverse of false)

// Assignment operators include =, +=, -=, *=, /=, and %=.

    // = is a binary operator, it assigns the value of the right operand to the left operand
    let z = 3;
    console.log(z); // 3

    // += is a binary operator, it adds the value of the right operand to the left operand and assigns the result to the left operand
    let a = 3;
    a += 2; // equivalent to a = a + 2
    console.log(a); // 5

    // -= is a binary operator, it subtracts the value of the right operand from the left operand and assigns the result to the left operand
    let b = 3;
    b -= 2; // equivalent to b = b - 2
    console.log(b); // 1

    // *= is a binary operator, it multiplies the value of the left operand by the right operand and assigns the result to the left operand
    let c = 3;
    c *= 2; // equivalent to c = c * 2
    console.log(c); // 6

    // /= is a binary operator, it divides the value of the left operand by the right operand and assigns the result to the left operand
    let d = 3;
    d /= 2; // equivalent to d = d / 2
    console.log(d); // 1.5

    // %= is a binary operator, it returns the remainder of the value of the left operand divided by the right operand and assigns the result to the left operand
    let e = 3;
    e %= 2; // equivalent to e = e % 2
    console.log(e); // 1

// Bitwise operators include &, |, ^, ~, <<, and >>.

    // & is a binary operator, it performs a bitwise AND operation on the two operands
    console.log(3 & 2); // 2 (3 in binary is 11, and 2 in binary is 10, so 11 & 10 is 10, which is 2 in decimal)

/*
    3 in binary:  1 1
    2 in binary:  1 0
  -------------------
    Result:       1 0  (which is 2 in decimal)
*/

    // | is a binary operator, it performs a bitwise OR operation on the two operands
    console.log(3 | 2); // 3 (3 in binary is 11, and 2 in binary is 10, so 11 | 10 is 11, which is 3 in decimal)

    // ^ is a binary operator, it performs a bitwise XOR operation on the two operands
    console.log(3 ^ 2); // 1 (3 in binary is 11, and 2 in binary is 10, so 11 ^ 10 is 01, which is 1 in decimal)

    // ~ is a unary operator, it performs a bitwise NOT operation on the operand
    console.log(~3); // -4 (3 in binary is 11, so ~3 is -4) (the result is the two's complement of the operand)

    // << is a binary operator, it performs a bitwise left shift operation on the first operand by the number of bits specified by the second operand
    console.log(3 << 1); // 6 (3 in binary is 11, so 3 << 1 is 110, which is 6 in decimal)

    // >> is a binary operator, it performs a bitwise right shift operation on the first operand by the number of bits specified by the second operand
    console.log(3 >> 1); // 1 (3 in binary is 11, so 3 >> 1 is 1, which is 1 in decimal)

// typeof is a unary operator, it returns the type of the operand as a string
    console.log(typeof 3); // "number"
    console.log(typeof "3"); // "string"
    console.log(typeof true); // "boolean"
    console.log(typeof {}); // "object"
    console.log(typeof []); // "object"
    console.log(typeof null); // "object"
    console.log(typeof undefined); // "undefined"
    console.log(typeof function() {}); // "function"
    console.log(typeof Symbol()); // "symbol"

// Truthy and Falsy values
// In JavaScript, a value is truthy if it converts to true when evaluated in a boolean context, and falsy if it converts to false.

    // Falsy values include false, 0, "", null, undefined, and NaN
    console.log(Boolean(false)); // false
    console.log(Boolean(0)); // false
    console.log(Boolean("")); // false
    console.log(Boolean(null)); // false
    console.log(Boolean(undefined)); // false
    console.log(Boolean(NaN)); // false

    // Everything else is truthy
    console.log(Boolean(true)); // true
    console.log(Boolean(1)); // true
    console.log(Boolean("hello")); // true
    console.log(Boolean({})); // true
    console.log(Boolean([])); // true
    console.log(Boolean(function() {})); // true
    console.log(Boolean(Symbol())); // true

    // Use the !! operator to convert a value to a boolean
    console.log(!!"hello"); // true
    console.log(!!0); // false

    // Use Case
    // You can use truthy and falsy values to write more concise code.
    // Instead of writing:
    let name = "John";
    if (name !== "") {
      console.log("Hello, " + name + "!");
    }
    // You can write:
    if (name) {
      console.log("Hello, " + name + "!");
    }
    // Instead of writing:
    let count = 0;
    if (count === 0) {
      console.log("There are no items.");
    }
    // You can write:
    if (!count) {
      console.log("There are no items.");
    }

// Short-circuit evaluation
// In JavaScript, the && and || operators use short-circuit evaluation.

    // && is a binary operator, it returns the first operand if it is falsy, and the second operand otherwise
    console.log(false && "hello"); // false

    // || is a binary operator, it returns the first operand if it is truthy, and the second operand otherwise
    console.log("hello" || "world"); // "hello"

    // Use Case
    // You can use short-circuit evaluation to write more concise code.
    // Instead of writing:
    let name2 = "John";
    let greeting2;
    if (name2) {
      greeting2 = "Hello, " + name2 + "!";
    } else {
      greeting2 = "Hello, world!";
    }
    console.log(greeting2); // "Hello, John!"

    // You can write:
    let name3 = "John";
    let greeting3 = name3 && "Hello, " + name3 + "!" || "Hello, world!";
    console.log(greeting3); // "Hello, John!"


