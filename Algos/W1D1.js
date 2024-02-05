/* case insensitive string compare */

const strA1 = "ABC";
const strB1 = "abc";
const expected1 = true;

const strA2 = "ABC";
const strB2 = "abd";
const expected2 = false;

const strA3 = "ABC";
const strB3 = "bc";
const expected3 = false;

/**
 * Determines whether or not the strings are equal, ignoring case.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} strA
 * @param {string} strB
 * @returns {boolean} If the strings are equal or not.

 */
function caseInsensitiveStringCompare(strA, strB) {
    // your code here
    // ✨ Hint: There is a built-in function with JS to convert cases in strings.
    if (strA.toUpperCase() === strB.toUpperCase()) {
        return true;
    } return false;
}

/*****************************************************************************/

/* 
    String: Reverse
    Given a string,
    return a new string that is the given string reversed
*/

const str4 = "creature";
const expected4 = "erutaerc";

const str5 = "dog";
const expected5 = "god";

const str6 = "hello";
const expected6 = "olleh";

const str7 = "";
const expected7 = "";

/**
 * Reverses the given str.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str String to be reversed.
 * @returns {string} The given str reversed.
 */
function reverseString(str) {
    var returnStr = str.split("").reverse("").join("")

    return returnStr;
    // let returnStr = '';
    //     for (let i = str.length - 1; i >= 0; i--) {
    //         returnStr += str[i];
    //     }
    //     return returnStr;
}

//TEST CODE FOR REVERSE
console.log(reverseString(str4)) // Expected: erutaerc
console.log(reverseString(str5)) // Expected: god
console.log(reverseString(str6)) // Expected: olleh
console.log(reverseString(str7)) // Expected: ""

