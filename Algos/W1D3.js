/* 
    String Encode
    You are given a string that may contain sequences of consecutive characters.
    Create a function to shorten a string by including the character,
    then the number of times it appears. 
    
    If final result is not shorter (such as "bb" => "b2" ),
    return the original string.
  */

const str1 = "aaaabbcdddf";
const expected1 = "a4b2c1d3";

const str2 = "";
const expected2 = "";

const str3 = "a";
const expected3 = "a";

const str4 = "bbcc";
const expected4 = "bbcc";

/**
 * Encodes the given string such that duplicate characters appear once followed
 * by a number representing how many times the char occurs. Only encode strings
 * when the result yields a shorter length.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str The string to encode.
 * @returns {string} The given string encoded.
 */
function encodeStr(str) {
    let encoded = "";
    let compareChar = str[0];
    let compareCharCount = 0;

    for (let i = 0; i < str.length; i++) {
        const isDuplicate = str[i] === compareChar;
        const isLastIteration = i === str.length - 1;

        if (isDuplicate) {
            compareCharCount += 1;
        }

        /* 
        Making the below an else is too restrictive and makes it more complex to
        cover all the cases w/o repeating conditions and nesting conditions.
        However, the above if statement could be turned into an else below this,
        but it may be clearer to keep it as two ifs since the conditions are both
        stated explicitly.
        */
        if (isDuplicate === false || isLastIteration) {
            encoded += compareChar + compareCharCount;
            compareChar = str[i];
            compareCharCount = 1;
        }
    }
    encoded += compareChar + compareCharCount;
    return encoded.length > 0 && encoded.length < str.length ? encoded : str;

}

function compressStringOptimized(str) {
    const compressed = [];
    let count = 1;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            count++;
        } else {
            compressed.push(str[i] + count);
            count = 1;
        }
    }
    const compressedString = compressed.join('');
    return compressedString.length < str.length ? compressedString : str;
}

console.log(encodeStr(str1))
/* 
    EXTRA
    String Decode  
*/

const str5 = "a3b2c1d3";
const expected5 = "aaabbcddd";

const str6 = "a3b2c12d10";
const expected6 = "aaabbccccccccccccdddddddddd";

/**
 * Decodes the given string by duplicating each character by the following int
 * amount if there is an int after the character.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str An encoded string with characters that may have an int
 *    after indicating how many times the character occurs.
 * @returns {string} The given str decoded / expanded.
 */
function decodeStr(str) {
    // Your Code Here

    // We'll want to make use of the JS functions isNaN to check for numbers! 
    isNaN("0") // True
    // Also we'll want to use: parseInt to convert any strings to numbers as needed. 
    parseInt("10") // 10
    // Extra: There is a method in JS called .repeat(x) that we can use to quickly repeat a character x number of times.)


}

/*****************************************************************************/