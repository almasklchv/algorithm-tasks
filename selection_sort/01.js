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

function countdown(i) {
    console.log(i)
    if (i <= 1) {
        console.log('Completed!')
        return;
    } else if (i <= 91000 && i >= 3) {
        setTimeout(function() {
            countdown(i - 1)
        }, 1)
        
    } else if (i == 2) {
        setTimeout(function() {
            countdown(i-1)
        }, 10000000)
    } 
    else {
            countdown(i - 1)
        }
        
       
    }

countdown(100000);