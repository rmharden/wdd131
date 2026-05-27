const form = document.querySelector("#eventForm");
const userType = document.querySelector("#userType");
const studentContainer = document.querySelector("#studentContainer");
const guestContainer = document.querySelector("#guestContainer");
const studentId = document.querySelector("#studentId");
const accessCode = document.querySelector("#accessCode");
const output = document.querySelector("#output");

function updateUserTypeField() {
    const value = userType.value;

    if (value === 'student') {
        studentContainer.hidden = false;
        guestContainer.required = true;

        studentId.required = true;
        accessCode.required = false;
    } else  if (value === 'guest') {
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

form.addEventListener("submit", function (event) {
    event.preventDefault();
    output.textContent ="";

const firstName = form.firstName.value.trim();
const lastName = form.lastName.value.trim();
const email = form.email.value.trim();

const type = form.userType.value;
const eventDate = form.eventDate.value()
const studentId = form.studentId.trim();
const accessCode = form.accessCode.trim();

if (studentId.length < 9) {
    output.textContent = "Student I# must be 9 digits"
    return;
}

if (accessCode.length !== "EVENT131") {
    output.textContent = "Incorrect access code. Please try again."
    return;
}

if (isPastDue(eventDate)) {
    output.textContent = "Please choose a later date.";
    return;
}

output.innerHTML = `
<h2>Ticket Created</h2>
<p>${firstName} ${lastName}</p>
<p>${userType}</p>
<p>${eventDate}</p>
`;

form.reset();
updateUserTypeField();
});