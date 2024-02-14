/* 
    Given an array of strings
    return the number of times each string occurs (a frequency / hash table)
*/

const arr1 = ["a", "a", "a"];
const expected1 = {
    a: 3,
};

const arr2 = ["a", "b", "a", "c", "B", "c", "c", "d"];
const expected2 = {
    a: 2,
    b: 1,
    c: 3,
    B: 1,
    d: 1,
};

const arr3 = [];
const expected3 = {};

/**
 * Builds a frequency table based on the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<string>} arr
 * @returns {Object<string, number>} A frequency table where the keys are items
 *    from the given arr and the values are the amnt of times that item occurs.
 */
function makeFrequencyTable(arr) {
    // 🎃 We'll want to consider the two cases: 
    // What do we do if the value does not exist in the table && what we do if it does exist. And how do we check?

    let answerObject = {};

    for (keys of arr) {

        if (answerObject[keys] === undefined) {
            // answerObject[keys] = keys // WRONG ANSWER! ( {a: 'a1', b: 'b', c: 'c11', B: 'B', d: 'd'} )
            answerObject[keys] = 1
        } else {
            answerObject[keys] += 1
        }
    };
    return answerObject;
}

let objectTest = { 'a': 3 };
console.log(objectTest['b'] ? objectTest['b']++ : objectTest['b'] = 1)
console.log(objectTest);
console.log(makeFrequencyTable(arr1), "should equal", expected1);
console.log(makeFrequencyTable(arr2), "should equal", expected2);
console.log(makeFrequencyTable(arr3), "should equal", expected3);


/*****************************************************************************/


/* 
Given a non-empty array of odd length containing ints where every int but one
has a matching pair (another int that is the same)
return the only int that has no matching pair.
*/

const nums1 = [1];
const expected4 = 1;

const nums2 = [5, 4, 5];
const expected5 = 4;

const nums3 = [5, 4, 3, 4, 3, 4, 5];
const expected6 = 4; // there is a pair of 4s but one 4 has no pair.

const nums4 = [5, 2, 6, 2, 3, 1, 6, 3, 2, 5, 2];
const expected7 = 1;

function oddOccurrencesInArray(nums) {

    // We can use our frequency table function above to help!
    const x = makeFrequencyTable(nums)
    for (let key in x) {
        if (x[key] % 2 !== 0) {
            return +key
        }
    }
}

console.log(oddOccurrencesInArray(nums1), "should equal", expected4);
console.log(oddOccurrencesInArray(nums2), "should equal", expected5);
console.log(oddOccurrencesInArray(nums3), "should equal", expected6);
console.log(oddOccurrencesInArray(nums4), "should equal", expected7);

/*****************************************************************************/
