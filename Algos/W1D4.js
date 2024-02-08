/* 
    String: Is Palindrome

    Create a function that returns a boolean whether the string is a strict palindrome. 
        - palindrome = string that is same forwards and backwards
    
    Do not ignore spaces, punctuation and capitalization
 */

const str1 = "a x a";
const expected1 = true;

const str2 = "racecar";
const expected2 = true;

const str3 = "Dud";
const expected3 = false;

const str4 = "oho!";
const expected4 = false;

/**
 * Determines if the given str is a palindrome (same forwards and backwards).
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {boolean} Whether the given str is a palindrome or not.
 */
function isPalindrome(str) {
    let result = true
    // Since this is a repeat algo, here's a cool for loop trick:
    // We can instantiate two variables in the first part of our loop logic. In addition, we can also itterate those two variables too.
    for (let i = 0, j = str.length - 1; i < j; i++, j--) {
        // str[i] is the left side of our string. str[j] is the right side of our string.
        if (str[i] !== str[j]) {
            result = false
        }
    }
    return result
}

/*****************************************************************************/

/* 
    Longest Palindrome

    For this challenge, we will look not only at the entire string provided,
    but also at the substrings within it.
    Return the longest palindromic substring. 

    Strings longer or shorter than complete words are OK.

    All the substrings of "abc" are:
    a, ab, abc, b, bc, c
*/



const str5 = "what up, daddy-o?";
const expected5 = "dad";

const str6 = "uh, not much";
const expected6 = "u";

const str7 = "Yikes! my favorite racecar erupted!";
const expected7 = "e racecar e";

const str8 = "a1001x20002y5677765z";
const expected8 = "5677765";

const str9 = "a1001x20002y567765z";
const expected9 = "567765";

/**
 * Finds the longest palindromic substring in the given string.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {string} The longest palindromic substring from the given string.
 */
function longestPalindromicSubstring(str) {

    // Use the helper isPalindrome function to check the substrings! ✨
    // Side-note: a nested for loop is recommended for this~ so might not want to use the trick from isPalindrome.

    // Hint: We could make use of .slice() to get substrings like the abc example above.
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice

    let returnStr = str[0]

    for (let i = 0; i < str.length - 1; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            if (str.slice(i, j).length > returnStr.length && isPalindrome(str.slice(i, j))) {
                returnStr = str.slice(i, j)
            }
        }
    }
    return returnStr
}

/*****************************************************************************/