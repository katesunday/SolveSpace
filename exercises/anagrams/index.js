// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// function anagrams(stringA, stringB) {
//
//     const lettersOnlyA = stringA.replace(/\W/g,'').toLowerCase();
//     const lettersOnlyB = stringB.replace(/\W/g,'').toLowerCase();
//
//     //возвращает число, указывающее, где должна находиться эта строка при сортировке
//     // (до, после или в том же самом месте, что и строка, переданная в качестве параметра).
//
//     const sortedStringA = lettersOnlyA.split("").sort((a,b)=>{
//        return  a.localeCompare(b)
//     })
//     const sortedStringB = lettersOnlyB.split("").sort((a,b)=>{
//        return  a.localeCompare(b)
//     })
//
//     return sortedStringA.join('') === sortedStringB.join("")
//
// }

// function anagrams(stringA, stringB) {
//
//
//   function buildCharMap(str) {
//       const charMap = {};
//
//       for (let el of str.replace(/\W/g,'').toLowerCase()){
//           charMap[el] = charMap[el] + 1 || 1
//       }
//
//       return charMap;
//   }
//
//     const aCharMap = buildCharMap(stringA)
//     const bCharMap = buildCharMap(stringB)
//
//     if(Object.keys(aCharMap).length !== Object.keys(bCharMap).length){
//         return false
//     }
//
//     for (let el in aCharMap){
//        if(  aCharMap[el] !== bCharMap[el]) {
//            return false
//        }
//     }
//     return true
// }

function anagrams(stringA, stringB) {

    function orderedString(str) {
        return str.replace(/\W/g,'').toLowerCase().split('').sort().join('');
    }

    return orderedString(stringA) === orderedString(stringB)
}


module.exports = anagrams;
