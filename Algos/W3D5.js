/* 
    Given an int to represent how much change is needed
    calculate the fewest number of coins needed to create that change,
    using the standard US denominations
*/

const cents1 = 25;
const expected1 = { quarter: 1 };

const cents2 = 50;
const expected2 = { quarter: 2 };

const cents3 = 9;
const expected3 = { nickel: 1, penny: 4 };

const cents4 = 99;
const expected4 = { quarter: 3, dime: 2, penny: 4 };

/**
 * Calculates the fewest coins of the standard American denominations needed
 *    to reach the given cents amount.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} cents
 * @param {string} sick
 * @returns {Object<string, number>} - A denomination table where the keys are
 *    denomination names and the value is the amount of that denomination
 *    needed.
 */
function fewestCoinChange(cents) {
    // A good place to start is defining an object that defines what each coin is worth. The key being the coin name, and the value being the currency value.
    // Also remember to optimize to the fewest number of coins!
}

/*****************************************************************************/

console.log(`Result : ${fewestCoinChange(cents1)}, Expected : ${JSON.stringify(expected1)}`)
console.log(`Result : ${fewestCoinChange(cents2)}, Expected : ${JSON.stringify(expected2)}`)
console.log(`Result : ${fewestCoinChange(cents3)}, Expected : ${JSON.stringify(expected3)}`)
console.log(`Result : ${fewestCoinChange(cents4)}, Expected : ${JSON.stringify(expected4)}`)