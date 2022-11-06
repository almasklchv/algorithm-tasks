// recursive sum

function sum(array) {
    let result = 0;
    if (array.length === 0) {
        return result;
    } else {
        return result + array.shift() + sum(array);
    }
}

console.log(sum([2, 4, 6]))