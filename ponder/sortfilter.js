nums = [12, 10, 8, 3];

// This is the new sort that will call the below compare function so it won't sort by first digit, but it compares and sorts by value.
console.log(nums.sort(compareFn));

// console.log(nums.sort());

//compare function because the sort above will sort based on the first digit of the number not based on its value.
function compareFn(a,b) {
    if (a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    }
    return 0;
}

// this is a string array:

const simpleList = ["oranges", "grapes", "lemons", "Bananas", "watermelons", "coconuts", "broccoli", "mango"];

let simpleSort = simpleList.sort();

console.log(simpleSort);