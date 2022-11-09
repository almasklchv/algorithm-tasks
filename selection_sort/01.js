'use strict';

function findSmallestIndex(array) {
    let smallestElement = array[0];
    let smallestIndex = 0;

    for (let i = 1; i < array.length; i++) {
        let arrayElement = array[i];
        if (typeof array[i] == 'string') {
            arrayElement = arrayElement.toUpperCase;
        }
        if (arrayElement < smallestElement) {
            smallestElement = array[i];
            smallestIndex = i;
        }
    }



    return smallestIndex;
}

function selectionSort(array) {
    let sortedArray = [];
    let length = array.length;

    for (let i = 0; i < length; i++) {
        let smallestIndex = findSmallestIndex(array);
        sortedArray.push(array.splice(smallestIndex, 1)[0])
    }

    return sortedArray;
}

console.log(selectionSort(['A', 'h', 'a', 'K', 'D', 'd', 'H', 'e', 'J', 'b', 'Y', 'm']));
console.log(selectionSort([7, 4, 2, 3, 1, 5]))

