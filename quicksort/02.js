// recursive count

function count(array, counter) {
    if (array.length === 0) {
        return counter;
    } else {
        array.shift();
        counter++;
        return count(array, counter);
    }
}

console.log(count([2, 4, 6, 4, 'j'], 0));