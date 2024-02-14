/* 
    Given a string,
    return a new string with the duplicates excluded

    Bonus: Keep only the last instance of each character.
*/

const str1 = "abcABC";
const expected1 = "abcABC";

const str2 = "helloo";
const expected2 = "helo";

const str3 = "";
const expected3 = "";

const str4 = "aa";
const expected4 = "a";

/**
 * De-dupes the given string.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str A string that may contain duplicates.
 * @returns {string} The given string with any duplicate characters removed.
 */
function stringDedupe(str) {
    // There are a few approaches here. 
    // One possible one is using an object (like the frequency table) to track if a character has been seen yet.
}

console.log(stringDedupe(str1), "should equal", expected1);
console.log(stringDedupe(str2), "should equal", expected2);
console.log(stringDedupe(str3), "should equal", expected3);
console.log(stringDedupe(str4), "should equal", expected4);


/*****************************************************************************/

/* 
    Given a string containing space separated words
    Reverse each word in the string.

    If you need to, use .split to start, then try to do it without.
*/

const str5 = "hello";
const expected5 = "olleh";

const str6 = "hello world";
const expected6 = "olleh dlrow";

const str7 = "abc def ghi";
const expected7 = "cba fed ihg";

/**
 * Reverses the letters in each words in the given space separated
 * string of words. Does NOT reverse the order of the words themselves.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str Contains space separated words.
 * @returns {string} The given string with each word's letters reversed.
 */
function reverseWords(str) {
    // Dealing with spaces? There might be a string method we used before that returned SPLIT up strings. 🤔
    // Note if we strip away spaces, we will want to re-introduce them too after our reversal. 

    // 💭 Extra: We can solve this with a few built-in methods, similar to reverseWord in the past. 
    //           If you solved it that way, feel free to try without the built ins! 
}



console.log(reverseWords(str5), "should equal", expected5);
console.log(reverseWords(str6), "should equal", expected6);
console.log(reverseWords(str6), "should equal", expected7);

/*****************************************************************************/