const aCourse = {
    code: 'CSE2121b',
    name: 'Javascript Language',
    logo: 'images/js-logo.png'
};

console.log(aCourse.code);
console.log(aCourse.name);

document.querySelector('#courseName').textContent = aCourse.name;
document.querySelector('#courseName').textContent = aCourse.code;
