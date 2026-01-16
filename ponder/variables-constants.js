const PI = 3.14;
let radius = 3;

let area = radius * radius * PI;

console.log(area);

radius = 20;
area = radius * radius * PI;

console.log(area)

// Called "type coersion"
const one = 1;
const two = '2';

let result = oen * two;
console.log(result);

result = one + Number(two);
console.log(result);

let course = "CSE131"; //global scope
if (true) {
    let student = "John";
    console.log(course); //works just fine, course is global
    console.log(student) //works just fine, it's beeing access wi
}
console.log(course); // works fine, course is global
console.log(student); //does not work, can't access a block variable