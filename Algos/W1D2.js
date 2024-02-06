/* 
    Acronymizer

    Create a function that, given a string, returns the string’s acronym 
    (first letter of each word capitalized). 
*/

const str1 = "object oriented programming";
const expected1 = "OOP";

// The 4 pillars of OOP
const str2 = "abstraction polymorphism inheritance encapsulation";
const expected2 = "APIE";

const str3 = "software development life cycle";
const expected3 = "SDLC";

// Bonus: ignore extra spaces
const str4 = "  global   information tracker    ";
const expected4 = "GIT";

/**
 * Turns the given str into an acronym.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} wordsStr A string to be turned into an acronym.
 * @returns {string} The acronym.
 */
function acronymize(str) {
    // MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
    //⚠️ Do it with .split first if you need to, then try to do it without
    // When doing it without split, we'd be wanting to check for spaces~!
    let newStr = ""
    let splitStr = str.split(' ')

    // for (let i = 0; i < splitStr.length; i++) {
    //     if (!splitStr[i][0]) {
    //         continue
    //     }
    //     newStr = newStr + splitStr[i][0]
    // }
    for (const word of splitStr) {
        if (word !== "") {
            newStr += word[0]
        }
    }
    return newStr.toUpperCase()
}

function acronymizeWithOutSplit(str) {
    let acryn = ''

    for (var i = 0; i < str.length; i++) {
        if (i == 0 && str[i + 1] != ' ') {
            acryn += str[0];
        }
        else if (str[i] == ' ' && str[i + 1] != ' ' && i < str.length - 1) {
            acryn += str[i + 1];
        }
        // console.log(acryn)
    }

    return acryn.toUpperCase();
}
acronymize(str2);
acronymize(str4);

/*****************************************************************************/
