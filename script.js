//Challenge Part 1
function addingToX(num) {
    // declare sum variable
    let sum = 0;

    // loop while < num and add num to the sum
    for(let i = 0; i <= num; i++){
        // add i to the sum
        sum += i;
    }
    return sum;

}

// Test your answer
console.log(addingToX(1));  // 1
console.log(addingToX(2));  // 3
console.log(addingToX(3));  // 6
console.log(addingToX(10)); // 55

//Challenge Part 2

function arrayToX(num) {
    // declare result array
    let array = [];
    // loop while <= num
    for(let i = 1; i <= num; i++){
        // call addingToX function on i
    let element = addingToX(i);
        // push the element into our result array
    array.push(element);
    }
    return array;
}

//Test your answer
console.log(arrayToX(1));   // [1]
console.log(arrayToX(2));   // [1, 3]
console.log(arrayToX(3));   // [1, 3, 6]
console.log(arrayToX(10));  // [1, 3, 6, 10, 15, 21, 28, 36, 45, 55]
