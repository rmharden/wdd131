const form = document.querySelector("#eventForm");
const userType = document.querySelector("#userType");
const userTypeContainer = document.querySelector("#usertTypeContainer");
const studentId = document.querySelector("#studentId");
const accessCode = document.querySelector("#accessCode");
const output = document.querySelector("#output");

function updateUserTypeField() {
    const value = userType.value;

    if (value === 'student') {
        userTypeContainer.hidden = false;
        studentId.required = true;
    } else {
        userTypeContainer.hidden = true;
        studentId.required = false;
    }
    if (value === 'guest') {
        userTypeContainer.hidden = false;
        accessCode.required = true;
    } else {
        userTypeContainer.hidden = true;
        accessCode.required = false;
    }
}

userType.addEventListener("change", updateUserTypeField);
updateUserTypeField();

function isPastDue(value) {
    const today = new Date();
    const chosen = new Date(value);
    return chosen < today;
}