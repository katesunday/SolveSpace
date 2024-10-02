// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {

    const lettersOnlyA = stringA.replace(/\W/g,'').toLowerCase();
    const lettersOnlyB = stringB.replace(/\W/g,'').toLowerCase();

    //возвращает число, указывающее, где должна находиться эта строка при сортировке
    // (до, после или в том же самом месте, что и строка, переданная в качестве параметра).


    const sortedStringA = lettersOnlyA.split("").sort((a,b)=>{
       return  a.localeCompare(b)
    })
    const sortedStringB = lettersOnlyB.split("").sort((a,b)=>{
       return  a.localeCompare(b)
    })

    return sortedStringA.join('') === sortedStringB.join("")

}

module.exports = anagrams;
