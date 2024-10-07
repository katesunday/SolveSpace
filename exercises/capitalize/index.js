// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {

    return str.split(" ").map((el)=> el[0].toUpperCase() + el.slice(1)).join(" ")


    // const strArr = str.split(' ')
    // const newArr = strArr.map((el)=>{
    //     return el[0].toUpperCase() + el.slice(1)
    // })
    //
    // return newArr.join(' ')


   //  let result = '';
   // for (let i = 0; i < str.length; i++) {
   //     if(str[i] === " "){
   //         result += " " + str[i+1].toUpperCase()
   //         i++
   //     } else{
   //         result += str[i]
   //     }
   // }
   // return result[0].toUpperCase() + result.slice(1);
}
capitalize('a lazy fox')
module.exports = capitalize;
