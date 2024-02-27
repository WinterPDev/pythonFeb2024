/* 
    Recursive Factorial

    Input: integer
    Output: integer, product of ints from 1 up to given integer
    
    If less than zero, treat as zero.
    Bonus: If not integer, truncate (remove decimals).
    
    Experts tell us 0! is 1. (0 factorial is 1)
    
    rFact(3) = 6 (1*2*3)
    rFact(6.8) = 720 (1*2*3*4*5*6)
*/

const num1 = 3;
const expected1 = 6;
// Explanation: 1*2*3 = 6

const num2 = 6.8;
const expected2 = 720;
// Explanation: 1*2*3*4*5*6 = 720

const num3 = 0;
const expected3 = 1;

/**
 * Recursively multiples 1 to the given int.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} n The int to factorial. Treat negatives as zero and
 *    floor decimals.
 * @returns {number} The result of !n.
 */
function factorial(n) {
    // As per above, round down decimals and treat negatives as zero.
    if (isNaN(n)) {
        return null
    }

    n = Math.floor(n)

    // Sanitize the value?

    // Base Case?
    if (n <= 0) {
        return 1
    }
    // console.log(n)

    // Recursive return / call
    return n * factorial(n - 1)
}

/*****************************************************************************/

/*
    Sum To One Digit
    Implement a function sumToOne(num)​ that,
    given a number, sums that number’s digits
    repeatedly until the sum is only one digit. Return
    that final one digit result.

    Tips:
        to access digits from a number, need to convert it .toString() to access each digit via index
        parseInt(arg) returns arg parsed as an integer, or NaN if it couldn't be converted to an int
        isNaN(arg) used to check if something is NaN
*/

const num4 = 5;
const expected4 = 5;

const num5 = 10;
const expected5 = 1;

const num6 = 25;
const expected6 = 7;

/**
 * Sums the given number's digits until the number becomes one digit.
 * @param {number} num The number to sum to one digit.
 * @returns {number} One digit.
 */
function sumToOneDigit(num, i = 0) {
    // As mentioned in the description above, you could approach this with casting to a string since numbers don't have index/isolated values. 
    // Watch out for NaN! (Not a Number)

    let numStr = num.toString()
    // console.log(typeof num)

    if (i === numStr.length) {
        return 0
    }

    return parseInt(numStr[i]) + sumToOneDigit(num, i + 1)
}

/*****************************************************************************/