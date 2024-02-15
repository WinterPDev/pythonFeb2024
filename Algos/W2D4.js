/* 
    String: Rotate String

    Create a standalone function that accepts a string and an integer,
    and rotates the characters in the string to the right by that given
    integer amount.
*/

const str = "Hello World";

const rotateAmnt1 = 0;
const expected1 = "Hello World";

const rotateAmnt2 = 1;
const expected2 = "dHello Worl";

const rotateAmnt3 = 2;
const expected3 = "ldHello Wor";

const rotateAmnt4 = 4;
const expected4 = "orldHello W";

const rotateAmnt5 = 13;
const expected5 = "ldHello Wor";
/* 
Explanation: this is 2 more than the length so it ends up being the same
as rotating it 2 characters because after rotating every letter it gets back
to the original position.
*/

/**
 * Rotates a given string's characters to the right by the given amount,
 * wrapping characters to the beginning.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @param {number} amnt The amount of characters in the given str to rotate to the
 *    right.
 * @returns {string} The string rotated by the given amount.
 */
function rotateStr(str, amnt) {
    // One edge case to consider: If a string is the same length as the amnt, it will rotate back to the original string.
    // Hint: We could cleverly use .slice() here~

    let newAmnt = amnt % str.length

    let slicedWords = str.slice(str.length - newAmnt)
    // console.log(slicedWords)

    let slicedWords2 = str.slice(0, str.length - newAmnt)

    return slicedWords + slicedWords2

    // return str.slice(str.length - (amnt%str.length)) + str.slice(0,str.length-(amnt%str.length))
    // answer in one line
}

console.log(rotateStr(str, rotateAmnt1), "should equal", expected1);
console.log(rotateStr(str, rotateAmnt2), "should equal", expected2);
console.log(rotateStr(str, rotateAmnt3), "should equal", expected3);
console.log(rotateStr(str, rotateAmnt4), "should equal", expected4);
console.log(rotateStr(str, rotateAmnt5), "should equal", expected5);


/*****************************************************************************/


/* 
    Create the function isRotation(str1,str2) that
    returns whether the second string is a rotation of the first.
*/

const strA1 = "ABCD";
const strB1 = "CDAB";
// Explanation: if you start from A in the 2nd string, the letters are in the same order, just rotated
const expected6 = true;

const strA2 = "ABCD";
const strB2 = "CDBA";
// Explanation: all same letters in 2nd string, but out of order
const expected7 = false;

const strA3 = "ABCD";
const strB3 = "BCDAB";
// Explanation: same letters in correct order but there is an extra letter.
const expected8 = false;

/**
 * Determines whether the second string is a rotated version of the first.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} s1
 * @param {string} s2
 * @returns {boolean} Whether the second string is a rotated version of the 1st.
 */
function isRotation(s1, s2) {
    // We'll want to think about our criteria and build our conditional.
    // Note: We could use a .includes() method to make our lives a bit easier.
    if (s2.length !== s1.length) {
        return false
    }

    let newStr = s1 + s1 //adding a string to itself will account for all of the different rotation variations
    return newStr.includes(s2)
}

console.log(isRotation(strA1, strB1), "should equal", expected6);
console.log(isRotation(strA1, strB2), "should equal", expected7);
console.log(isRotation(strA1, strB3), "should equal", expected8);



/*****************************************************************************/