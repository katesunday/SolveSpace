// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let result = 0;

    str.toLowerCase().split("").map((el)=>{
        return vowels.includes(el) ? result++ : result
    })

    // for (let el of str.toLowerCase()){
    //     vowels.includes(el) ? result++ : result
    // }

    return result
}
vowels('Why do you ask?')
module.exports = vowels;
