const btn = document.querySelector('.menu-btn');
const menu = document.querySelector('nav');

btn.addEventListener('click', toggleMenu);

function toggleMenu() {
    menu.classList.toggle('hide');
    btn.classList.toggle('change');
}
const exercises = [
        {
        image: 'images/temp-back-photos/banish-back-fat-1.jpg',
        image2: 'images/temp-back-photos/banish-back-fat-21.jpg',
        name: 'Back 1: Side Lateral Raise',
        reps: '12',
        count: '4',
        alternate: "all back exercises",
        description: 'Start with your weights down by your sides, palms facing forward. Keep your arms straight and lift your weights outward, stopping at shoulder height. Squeeze your shoulder blades once you reach the top, but be mindful to keep the weights directly out from your shoulders. Lower your arms back down. Do 12 repetitions.',
        order: 1,
        tags: ['back', 'arms', 'muscular', 'weights', 'dumbbells', 'core', 'calisthenics']
    },
    {
        image: 'images/temp-back-photos/banish-back-fat-overhead-press-up.jpg',
        image2: 'images/temp-back-photos/banish-back-fat-overhead-press-down.jpg',
        name: 'Back 2: Dumbbell Lat Pullover',
        reps: '12',
        count: '4',
        alternate: "all back exercises",
        description: 'Start with your arms overhead, palms facing forward. Bend your elbows outwards and press them in towards your sides, lowering weights to waist height. Squeeze your shoulder blades as you bring your elbows in. Do 12 repetitions.',
        order: 2,
        tags: ['back', 'arms', 'muscular', 'weights', 'dumbbells', 'core', 'calisthenics']
    },
    {
        image: 'images/temp-back-photos/lower-back-fat-workout-1.jpg',
        image2: 'images/temp-back-photos/lower-back-workout-21.jpg',
        name: 'Back 3: Standing Side Bend',
        reps: '12',
        count: '4',
        alternate: "all back exercises",
        description: 'Lower your weights to your sides and rotate your palms so they face your body. Keep your shoulders stacked directly over your hips (do not hunch forward or lean back) and lean your upper body down to one side, then gently lean to the other. Do 12 repetitions.',
        order: 3,
        tags: ['back', 'arms', 'muscular', 'weights', 'dumbbells', 'core', 'calisthenics']
    },
    {
        image: 'images/temp-back-photos/sculpt-back-1.jpg',
        image2: 'images/temp-back-photos/sculpt-back-2.jpg',
        name: 'Back 4: Chest Fly',
        reps: '12',
        count: '4',
        alternate: "all back exercises",
        description: 'Start with your elbows bent in towards your sides, weights extended outwards, and palms facing forward. Squeeze your elbows into your body (cinching your shoulder blades together), then release back out, keeping your shoulders down the entire time. Do 12 repetitions.',
        order: 4,
        tags: ['back', 'arms', 'muscular', 'weights', 'dumbbells', 'core', 'calisthenics']
    },
    {
        image: 'images/temp-back-photos/sculpt-lower-back-forward-swim.jpg',
        name: 'Back 5: Superman',
        reps: '12',
        count: '4',
        alternate: "all back exercises",
        description: 'Lie flat on your stomach, arms and legs extended out. Lift your arms and legs off the ground, as high as you can. Hold for a few seconds then lower yourself back down. Do 12 repetitions.',
        order: 5,
        tags: ['back', 'muscular', 'core', 'calisthenics', 'legs', 'full-body']
    },
    {
        image: 'images/temp-back-photos/superman-lifts.jpg',
        name: 'Back 6: Alternating Superman',
        reps: '12',
        count: '2',
        alternate: "all back exercises",
        description: 'Once again, lift your arms and legs off of the ground and then raise your left arm and right leg up even more. Hold here for a second or two then switch, raising your right arm and left leg up, holding briefly. Continue to alternate, count one repetition every time your right arm comes down.   Do 12 repetitions.',
        order: 6,
        tags: ['back', 'muscular', 'core', 'calisthenics', 'arms', 'legs', 'full-body']
    },
        {
        image: 'images/temp-back-photos/banish-back-fat-reverse-sit-ups.jpg',
        name: 'Back 7: Superman Bicycle Crunch',
        reps: '12',
        count: '2',
        alternate: "all back exercises",
        description: 'Lower your legs to the ground and place your arms behind your head, elbows out. Lift your head and shoulders off the ground to start, then raise your left elbow, pause briefly then return to center. Do 6 repetitions.  Perform the same movements with your right elbow. Do 6 repetitions.',
        order: 7,
        tags: ['back', 'muscular', 'core', 'calisthenics', 'arms', 'legs', 'full-body']
    },
    {
        image: 'images/temp-back-photos/banish-back-fat-pushup.jpg.jpg',
        image2: 'images/temp-back-photos/banish-back-fat-slow-pushup.jpg',
        name: 'Back 8: Modified Push-Up',
        reps: '12',
        count: '2',
        alternate: "Repeat this with all back exercises a total of three times.",
        description: 'Place your hands directly under your shoulders and bring your body into a pushup position, knees on the ground and heels in towards your tush. Keeping your shoulders in line with your hips, slowly lower yourself down for two counts, then press up for two counts, executing a slow and controlled pushup. Do 12 repetitions.',
        order: 8,
        tags: ['back', 'muscular', 'core', 'calisthenics', 'arms', 'legs', 'full-body']
    }
];



const workoutBody = document.querySelector('.workout-body');

let sitUpSets = [];
let pushUpSets = [];
let squatSets = [];

let sitUpTotal = 0;
let pushUpTotal = 0;
let squatTotal = 0;
if (workoutBody) {
    workoutBody.addEventListener("change", function(event) {
        console.log(event.target);
        console.log(event.target.checked);
        
        const setNumber = Number(event.target.dataset.set);
        console.log(setNumber);
        
        const sitUps = sitUpSets[setNumber];
        const pushUps = pushUpSets[setNumber];
        const squats = squatSets[setNumber];

        if (event.target.checked) {
            sitUpTotal += sitUps;
            pushUpTotal += pushUps;
            squatTotal += squats;
        } else {
            sitUpTotal -= sitUps;
            pushUpTotal -= pushUps;
            squatTotal -= squats;
        }
        console.log(sitUpTotal);
        console.log(pushUpTotal);
        console.log(squatTotal);

        document.querySelector('.sit-up-total').textContent = sitUpTotal;
        document.querySelector('.push-up-total').textContent = pushUpTotal;
        document.querySelector('.squat-total').textContent = squatTotal;

        const checkboxes = workoutBody.querySelectorAll('input[type="checkbox"]');
        const checkedBoxes = workoutBody.querySelectorAll('input[type="checkbox"]:checked');
        if (checkedBoxes.length === 6 ) {
            document.querySelector('.generator-motivation').classList.remove('hide');
        } else {
            document.querySelector('.generator-motivation').classList.add('hide');
        }
    });
}
const modal = document.querySelector('.instructions-modal');
const instructionsBtn = document.querySelector('.instructions-button');
const closeButton = document.querySelector('.close-viewer');

const startTimeInput = document.querySelector('#start-time');

if (startTimeInput) {
    const now = new Date();

    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2,'0');

    startTimeInput.value = `${hours}:${minutes}`;
}


if (modal && instructionsBtn && closeButton) {
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.close();
        }
    });
    function openModal() {
        modal.showModal();
    }
    instructionsBtn.addEventListener('click', openModal);
    function closeModal() {
        modal.close();
    }
    closeButton.addEventListener('click', closeModal);
}

const workoutForm = document.querySelector(".repetition-generator");
if (workoutForm) {
    workoutForm.addEventListener("submit", generateWorkout);
}
function generateWorkout(event) {
    event.preventDefault();
    workoutBody.innerHTML = "";

    sitUpSets = [];
    pushUpSets = [];
    squatSets = [];

    /*replacing the const variables with query selectors for the three exercise elements.*/
    /*const startingReps = Number(document.querySelector('#rep-number').value);*/
   
    const startingSitUps = Number(document.querySelector('#sit-up-number').value);
    const startingPushUps = Number(document.querySelector('#push-up-number').value);
    const startingSquats = Number(document.querySelector('#squat-number').value);

    const startingTime = document.querySelector('#start-time').value;
    const duration = Number(document.querySelector('#time-duration').value);
    console.log(startingTime);
    
    const timeParts = startingTime.split(":");
    const startingHour = Number(timeParts[0]);
    const startingMinutes = Number(timeParts[1]);

    console.log(startingTime);

    const totalStartingMinutes = startingHour * 60 + startingMinutes;

    /*const sets = [];*/
    /*const sitUpSets = [];
    const pushUpSets = [];
    const squatSets = [];*/

    sitUpTotal = 0;
    pushUpTotal = 0
    squatTotal = 0;

    document.querySelector('.sit-up-total').textContent = sitUpTotal;
    document.querySelector('.push-up-total').textContent = pushUpTotal;
    document.querySelector('.squat-total').textContent = squatTotal;

    
    for (let i = 0; i < 6; i++) {

        /*const reps = startingReps + i;*/
        const time = totalStartingMinutes + (duration * i);
        
        const hour = Math.floor(time / 60) % 24;
        /*https://www.w3schools.com/jsref/jsref_string_padstart.asp*/
        /*const minutes = String(time % 60).padStart(2, "0");*/
        const minutes = time % 60;
        
        /*
        const period = hour >= 12 ? "PM" : "AM";
        https://www.w3schools.com/js/js_if_ternary.asp
        the ? is a tenary operator:
        https://www.w3schools.com/js/js_logical.asp
        */

        let period;
        if (hour >= 12) {
            period = "PM";
        } else {
            period = "AM";
        }
        const displayHour = hour % 12 || 12;
        const displayMinutes = String(minutes).padStart(2, "0");

        const sitUps = startingSitUps + i;
        const pushUps = startingPushUps + i;
        const squats = startingSquats + i;

        /*sets.push(reps);*/
        sitUpSets.push(sitUps);
        pushUpSets.push(pushUps);
        squatSets.push(squats);
        
        /*workoutBody.innerHTML += `
        <tr>
            <td><input type="checkbox" aria-label="Complete set ${i + 1}"></td>
            <td>Set ${i + 1}</td>
            <td>${reps}</td>
            <td>${reps}</td>
            <td>${reps}</td>
        </tr>
        `;*/
        workoutBody.innerHTML += `
        <tr>
            <td><input type="checkbox" data-set="${i}" aria-label="Complete set ${i + 1}"></td>
            <td>Set ${i + 1}</td>
            <td>${displayHour}:${displayMinutes} ${period}</td>
            <td>${sitUps}</td>
            <td>${pushUps}</td>
            <td>${squats}</td>
            </tr>
            `;
    }
    /*
    
    https://www.w3schools.com/tags/att_data-.asp
    Above is the  link to the data-* Attribute information. Set is for our sets in each cell.
    const total = calculateTotals(sets);
    document.querySelector('.sit-up-total').textContent = total;
    document.querySelector('.push-up-total').textContent = total;
    document.querySelector('.squat-total').textContent = total;*/

    /*
    const sitUpTotal = calculateTotals(sitUpSets);
    const pushUpTotal = calculateTotals(pushUpSets);
    const squatTotal = calculateTotals(squatSets);

    document.querySelector('.sit-up-total').textContent = sitUpTotal;
    document.querySelector('.push-up-total').textContent = pushUpTotal;
    document.querySelector('.squat-total').textContent = squatTotal;
    */

    document.querySelector(".workout-generator-results")
        .classList.remove("hide");
    instructionsBtn.classList.remove("hide");
}
function calculateTotals(sets) {
    return sets.reduce((acc, reps) => {
        return acc + reps;
    }, 0);
}
const exerciseCard = document.querySelector('.exercise-card-container');
const form = document.querySelector('.exercise-search');
if (form) {
    form.addEventListener('submit', search);
}
function search(event) {
    event.preventDefault();
    let exerciseQuery = document.querySelector('#search').value;
    let filteredExercises = exercises.filter(function(exercise) {
        return (
            exercise.name.toLowerCase().includes(exerciseQuery.toLowerCase()) ||
            exercise.description.toLowerCase().includes(exerciseQuery.toLowerCase()) ||
            exercise.tags.find(tag =>
                tag.toLowerCase().includes(exerciseQuery.toLowerCase())
            )
        );
    });
    let sortedExercises = filteredExercises.sort(compareExercises);
    function compareExercises(a,b) {
        return a.order - b.order;
    }
    if (exerciseCard) {
        exerciseCard.innerHTML = "";
        sortedExercises.forEach(function(exercise) {
            renderExercises(exercise);
        });
    }
}
let randomNum = Math.floor(Math.random() * exercises.length);
function exercisesTemplate(exercise) {
    return `
        <section class="exercise-card">
            <img src="${exercise.image}" 
            alt="Photo of ${exercise.name}" 
            class="exercise-image">
            <div class="exercise-content">
                <h2 class="exercise-title">
                    ${exercise.name}
                </h2>
                <p class="exercise-count">
                    Count: ${exercise.count}
                </p>
                <p class="exercise-rep">
                    Repetition: ${exercise.reps}
                </p>
                <p class="exercise-description">
                    ${exercise.description}
                </p>
            </div>
        </section>
    `;
}
function renderExercises(exercise) {
    if (exerciseCard) {
        let html = exercisesTemplate(exercise);
        exerciseCard.innerHTML += html;
    }
}
function init() {
    if (exerciseCard) {
        renderExercises(exercises[randomNum]);
    }
}
const stretches = exercises
    .filter((exercise) => exercise.tags.includes("stretch"))
    .sort((a,b) => a.order - b.order);
const calisthenics = exercises
    .filter((exercise) => exercise.tags.includes("calisthenics"))
    .sort((a,b) => a.order - b.order);
const run = exercises
    .filter((exercise) => exercise.tags.includes("run"))
    .sort((a,b) => a.order - b.order);

const stretchList = document.querySelector(".stretch-checklist");
const calisthenicsList = document.querySelector(".calisthenics-checklist");
const runList = document.querySelector(".run-checklist")
if (stretchList) {
    renderChecklist(stretches, stretchList);
}
if (calisthenicsList) {
    renderChecklist(calisthenics, calisthenicsList);
}
if (runList) {
    renderChecklist(run, runList);
}
function checkListTemplate(exercise) {
    return `
        <li class="checklist-item">
            <input type="checkbox">
            <div class="exercise-info">
                <button class="exercise-name" data-name="${exercise.name}">
                    ${exercise.name}
                </button>
                <span>Count: ${exercise.count}</span>
                <span>Reps: ${exercise.reps}</span>
                ${exercise.alternate ?
                    `<span>| Alternate with ${exercise.alternate} for 3 sets</span>`
                : ''}
            </div>
        </li>
    `;
}
function renderChecklist(exerciseArray, list) {
    let html = "";
    exerciseArray.forEach((exercise) => {
        html += checkListTemplate(exercise);
    });
    list.innerHTML = html;
}
const exerciseModal = document.querySelector(".exercise-modal");
const modalImage = document.querySelector(".modal-image");
const modalTitle = document.querySelector(".modal-title");
const modalCount = document.querySelector(".modal-count");
const modalReps = document.querySelector(".modal-reps");
const modalDescription = document.querySelector(".modal-description");
const closeModalBtn = document.querySelector(".close-modal");
if (exerciseModal) {
    document.addEventListener("click", function(event) {
        if (event.target.classList.contains("exercise-name")) {
            const exerciseName = event.target.dataset.name;
            const exercise = exercises.find(
                item => item.name === exerciseName
            );
            modalImage.src = exercise.image;
            modalImage.alt = exercise.name;
            modalTitle.textContent = exercise.name;
            modalCount.textContent = `Count: ${exercise.count}`;
            modalReps.textContent = `Reps: ${exercise.reps}`;
            modalDescription.textContent = exercise.description;
            exerciseModal.showModal();
        }
    });
    closeModalBtn.addEventListener("click", () => {
        exerciseModal.close();
    });
    exerciseModal.addEventListener("click", (event) => {
        if (event.target === exerciseModal) {
            exerciseModal.close();
        }
    });
}
init();