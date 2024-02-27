/* 
    Array: Binary Search (non recursive)

    Given a sorted array and a value, return whether the array contains that value.
    Do not sequentially iterate the array. Instead, ‘divide and conquer’,
    taking advantage of the fact that the array is sorted .

    Bonus: 
        first complete it without the bonus, because they ask for additions
        after the initial algo is complete

        return how many times the given number occurs

    Visualization tool: https://yongdanielliang.github.io/animation/web/BinarySearchNew.html
*/

const numbers1 = [1, 3, 5, 6];
const searchNumber1 = 4;
const expected1 = false;

const numbers2 = [4, 5, 6, 8, 12];
const searchNumber2 = 5;
const expected2 = true;

const numbers3 = [3, 4, 6, 8, 12];
const searchNum3 = 3;
const expected3 = true;

// bonus, how many times does the search num appear?
const numbers4 = [2, 2, 2, 2, 3, 4, 5, 6, 7, 8, 9];
const searchNumber4 = 2;
const expected4 = 4;

/**
 * Efficiently determines if the given num exists in the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedNumbers
 * @param {number} searchNum
 * @returns {boolean} Whether the given num exists in the given array.
 */
function binarySearch(sortedNumbers, searchNum) {
    // We will approach this with "divide and conquer", needing three points: left, mid, right
    // Evaluate after each division if you need to travel up (the searchNum is higher) or travel down (the searchNum is lower) the array and divide again.
    // Use Math.floor() on our mid point to round down for indexes.
}

/*****************************************************************************/