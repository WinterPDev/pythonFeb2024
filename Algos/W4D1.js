/* 
Recursive Sigma

Input: integer
Output: sum of integers from 1 to Input integer
*/

const num1 = 5;
const expected1 = 15;
// Explanation: (1+2+3+4+5)

const num2 = 2.5;
const expected2 = 3;
// Explanation: (1+2)

const num3 = -1;
const expected3 = 0;

/**
 * Recursively sum the given int and every previous positive int.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} num
 * @returns {number}
 */
function recursiveSigma(num) {

    // Base Case
    if (num < 1) {
        return 0;
        // This returns zero, THEN we will unfurl the stack and increase our value from 1 -> 5
    }

    return num + recursiveSigma(num - 1);
    // 5 -> 4 -> 3 -> 2 -> 1 -> 0

    // 5 + recursiveSigma(4)
    //   4 + recursiveSigma(3)
    //     3 + recursiveSigma(2)
    //       2 + recursiveSigma(1)
    //         1 + recursiveSigma(0)
    // BASE CASE IS SATISFIED. RETURNS 0. This is when the stack unfurls.
    //         1 + 0 = 1
    //       2 + 1 = 3
    //     3 + 3 = 6
    //   4 + 6 = 10
    // 5 + 10 = 15


}

/*****************************************************************************/




/* 
    Recursively sum an arr of ints
*/

const nums1 = [1, 2, 3];
const expected4 = 6;

const nums2 = [1];
const expected5 = 1;

const nums3 = [];
const expected6 = 0;

/**
 * Add params if needed for recursion
 * Recursively sums the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number} The sum of the given nums.
 */
function sumArr(nums, i) {
    // Establish a base case AND think about what you are passing into the recursive function call!


}

/*****************************************************************************/