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

let lowerList = simpleList.map(function(fruit) {
    return fruit.toLowerCase();
})

let lowerSort = lowerList.sort();
console.log(lowerSort);

// in a search bar, the user can give the search term. In this case, we provided the search conditions, which will search the strings of fruit for any word containing the characters "an" together.
let searchTerm = "an";

let filterFruit = lowerSort.filter(searchFruit);

function searchFruit(item) {
    return item.includes(searchTerm);
}