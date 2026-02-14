//.forEach
const steps = ['one', 'two', 'three'];

// Anomonous function as parameter
// steps.forEach(function(item) {
//     console.log(item);
// })

// calling function as the parameter
steps.forEach(showSteps);


// You don't have to call it "item" it can be called x, or step, or something meaningful.
function showSteps(item) {
    console.log(item);
}

// .map
let myList = document.querySelector('#myList');

const stepsHtml = steps.map(listTemplate);


// li element is list with a li tag
// we could put it in the html with <li> but we want it to be "dynamic" through JavaScript
function listTemplate(item) {
    // called a template literal
    return `<li>${item}</li>`; //'<li>'+item+'</li> 
};

myList.innerHTML = stepsHtml.join('');

// case sensitive
let grades = ['A', 'A', 'A'];
let points;

let gpaPoints = grades.map(convert);

function convert(grade) {
        switch (grade){
            case 'A':
                points = 4;
                break;
            case 'B':
                points = 3;
                break;
            case 'C':
                points = 2;
                break;
            case 'D':
                points = 1;
                break;
            case 'F':
                points = 0;
                break;
            default:
                alert('not a valid grade');
        }
    return points;
}

console.log(gpaPoints);

// .reduce

let totalPoints = gpaPoints.reduce(getTotal);

function getTotal(total, item){
    return total + item;
}
console.log(totalPoints);

let gpaAverage = totalPoints/gpaPoints.length;
console.log(gpaAverage);

// .filter

const words = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];

const shortWords = words.filter(function(word){
    return word.length < 6;
})
console.log(shortWords);
 