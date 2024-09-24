// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const chars = {};
    // for arrays
    for (let el of str){
        !chars[el] ? chars[el] = 1 : chars[el] = chars[el]+1
    }
    console.log(chars)

    let maxLetter = '';
    let maxValue = 0;
    //for objects
    for (let el in chars){
       if(chars[el] > maxValue){
           maxValue = chars[el];
           maxLetter = el
        }
    }
    console.log(maxLetter)
    return maxLetter;
}
module.exports = maxChar;
