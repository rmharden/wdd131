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
    return `<li>${item}</li>`; //'<li>'+item+'</li>
};

myList.innerHTML = stepsHtml.join('');