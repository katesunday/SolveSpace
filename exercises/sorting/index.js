// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
    //return arr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length -1; j++) {
            if (arr[j] > arr[j+1]) {
                let lesser = arr[j];
                 arr[j] = arr[j+1]
                 arr[j+1] = lesser;
            }
        }
    }
    return arr;
}

function selectionSort(arr) {
    // for (let i = 0; i < arr.length; i++) {
    //     //представляем что самый маленький элемент в самом начале и сравниваем
    //     let indexOfMin = i;
    //     for (let j = i+1; j < arr.length; j++) {
    //         if(arr[j] < arr[indexOfMin]){
    //             let lesserIndex = j
    //             if(lesserIndex !== indexOfMin){
    //                 let el = arr[i]
    //                 arr[i] = arr[lesserIndex]
    //                 arr[lesserIndex] = el
    //             }
    //         }
    //     }
    // }

    //------------

    for (let i = 0; i < arr.length; i++) {
        //представляем что самый маленький элемент в самом начале и сравниваем
        let indexOfMin = i;
        for (let j = i+1; j < arr.length; j++) {
            if(arr[j] < arr[indexOfMin]){
                indexOfMin = j

            }
        }
        if(indexOfMin !== i){
            let el = arr[indexOfMin]
            arr[indexOfMin] = arr[i]
            arr[i] = el
        }
    }
    return arr
}

function mergeSort(arr) {

}

function merge(left, right) {

}

console.log( [100, -40, 500, -124, 0, 21, 7])
console.log(selectionSort( [100, -40, 500, -124, 0, 21, 7]))
module.exports = { bubbleSort, selectionSort, mergeSort, merge };
