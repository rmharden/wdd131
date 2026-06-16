nums = [12, 10, 8, 3];

// This is the new sort that will call the below compare function so it won't sort by first digit, but it compares and sorts by value.
console.log(nums.sort(compareFn));

// console.log(nums.sort());

//compare function because the sort above will sort based on the first digit of the number not based on its value.
/*function compareFn(a,b) {
    if (a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    }
    return 0;
}*/

// this is a string array:

const simpleList = ["oranges", "grapes", "lemons", "Bananas", "watermelons", "coconuts", "broccoli", "mango"];

let simpleSort = simpleList.sort();

console.log(simpleSort);

let lowerList = simpleList.map(function(fruit) {
    return fruit.toLowerCase();
})

let lowerSort = lowerList.sort();
console.log(lowerSort);

// in a search bar, the user can give the search term. In this case, we provided the search conditions, which will search the strings of fruit for any word containing the characters "an" together. The video switches the value that is searched. There was "an", "b", and "co".
let searchTerm = "co";

let filterFruit = lowerSort.filter(searchFruit);

function searchFruit(item) {
    return item.includes(searchTerm);
}

console.log(filterFruit);

// sorting properties in an object array.


// duplicated and pasted the function from above:
function compareFn(a,b) {
    if (a.price < b.price) {
        return -1;
    } else if (a.price > b.price) {
        return 1;
    }
    return 0;
}

// This is a "simple products object array":

const products = [
    {
    productName: "Wireless Mouse",
    price: 29.99
    },
    {
        productName: "Bluetooth Keyboard",
        price: 49.99
    },
    {
        productName: "Laptop Stand",
        price: 39.99
    }
];

let productSort = products.sort(compareFn);

console.log(productSort);