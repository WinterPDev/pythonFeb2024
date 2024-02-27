/* 
    Balance Index

    Here, a balance point is ON an index, not between indices.

    Return the balance index where sums are equal on either side
    (exclude its own value).

    Return -1 if none exist.
*/

//                3 , 7 , 3
const nums1 = [-2, 5, 7, 0, 3];
const expected1 = 2;

// Edge case: If the array is less than 3 values, there is no balance point. Return -1;
const nums2 = [9, 9];
const expected2 = -1;


/**
 * Finds the balance index in the given array where the sum to the left of the
 *    index is equal to the sum to the right of the index.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number} The balance index or -1 if there is none.
 */
function balanceIndex(nums) {
    let left = nums[0];
    let right = 0;
}



console.log(balanceIndex(nums1), "should equal", expected1);
console.log(balanceIndex(nums2), "should equal", expected2);
/*****************************************************************************/