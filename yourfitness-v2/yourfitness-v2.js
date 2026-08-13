const btn = document.querySelector('.menu-btn');
const menu = document.querySelector('nav');

btn.addEventListener('click', toggleMenu);

function toggleMenu() {
    menu.classList.toggle('hide');
    btn.classList.toggle('change');
}
const exercises = [
    // Stretching
    {
        image: 'images/grok-imagine-ab-stretch.jpg',
        name: 'Abdominal Stretch',
        reps: '0',
        count: '10-30',
        alternate: "",
        description: 'Stand and extend the arms upward and over the head. Interlace your fingers with your palms up and stretch your arms up and slightly back.',
        order: 1,
        tags: ['stretch', 'abdomen', 'standing', 'core']
    },
    {
        image: 'images/pexels-cottonbro-6293250.jpg',
        name: 'Chest Stretch',
        reps: '0',
        count: '10-30',
        alternate: "",
        description: 'Stand and interlace your fingers behind your back. Lift your arms behind your back so they move outward and away from your body, then lean forward from the waist. Bend your knees, lower your arms and return to the upright position.',
        order: 2,
        tags: ['stretch', 'chest', 'standing']
    },
    {
        image: 'images/pexels-eren-li-7241484.jpg',
        name: 'Upper Back Stretch',
        reps: '0',
        count: '10-30',
        alternate: "",
        description: 'Stand with your arms extended to the front at shoulder height with your fingers interlaced, and your palms facing outward. Extend your arms and shoulders forward.',
        order: 3,
        tags: ['stretch', 'back', 'standing']
    },
    {
        image: 'images/pexels-ketut-subiyanto-4909461.jpg',
        name: 'Rear Deltoid Stretch',
        reps: '0',
        count: '10-30',
        alternate: "",
        description: 'Stand with your feet shoulder width apart and your arms behind your body. With your right hand, grasp your left wrist behind your body and pull down and to the right. Tilt your head to the right. Return to the starting position and repeat with opposite arm.',
        order: 4,
        tags: ['stretch', 'shoulders', 'neck', 'standing']
    },
    {
        image: 'images/pexels-ketut-subiyanto-5037359-overhead-arm-pull.jpg',
        name: 'Overhead Arm Pull',
        reps: '0',
        count: '10-30',
        alternate: "",
        description: 'Stand with your feet shoulder width apart. Raise your left arm, bend your left elbow and place your left palm in the center of your back at the base of the neck. Gently pull your elbow with your right hand. Return to the starting position and repeat the procedures with the opposite arm.',
        order: 5,
        tags: ['stretch', 'triceps', 'arms', 'standing']
    },
    {
        image: 'images/pexels-anastasia-shuraeva-7663227.jpg',
        name: 'Cat Stretch',
        reps: '0',
        count: '10-30',
        alternate: "",
        description: 'Get on your hands and knees. Slowly arch your back upward. Bring your back down to the starting position.',
        order: 6,
        tags: ['stretch', 'back', 'kneeling']
    },
    {
        image: 'images/pexels-shvetsa-5068688.jpg',
        name: 'Hamstring Stretch',
        reps: '0',
        count: '10-30',
        alternate: "",
        description: 'Sit on the ground with both legs straight, toes pointing up and feet approximately six-inches apart. Bend forward at the hips and try to put your hands on your ankles or toes. Do not bounce.',
        order: 7,
        tags: ['stretch', 'hamstrings', 'legs', 'sitting']
    },
    {
        image: 'images/pexels-ivan-s-4164755.jpg',
        name: 'Groin Stretch',
        reps: '0',
        count: '10-30',
        alternate: "",
        description: 'Sit on the ground with the soles of your feet together and place your hands on or near your feet. Bend forward from the hips keeping the head up and hold this position.',
        order: 8,
        tags: ['stretch', 'groin', 'hips', 'sitting']
    },
    {
        /*image: 'images/pexels-alexy-almond-3756514.jpg',*/
        image: 'images/pexels-kampus-8173420.jpg',
        name: 'Hip and Back Stretch',
        reps: '0',
        count: '10-30',
        alternate: "",
        description: 'Sit on the ground with your right leg forward and straight. Cross your left leg over your right. While sitting erect, place your left foot flat on the ground near your right knee. Keep the heels of both feet in contact with the ground. Slowly rotate your upper body to the left and look over you left shoulder. Reach across your left leg with your right arm and place your right elbow across your knee and gently push your left leg to the right with your elbow. Use your left hand to support your body by placing it on the ground. Repeat the stretch for the other side by crossing the opposite leg and turning in the opposite direction.',
        order: 9,
        tags: ['stretch', 'hips', 'back', 'sitting']
    },
    {
        image: 'images/pexels-karola-g-4498188.jpg',
        name: 'Lying Back Stretch',
        reps: '0',
        count: '10-30',
        alternate: "",
        description: 'Lying on your back, bring both knees to your chest and grab your legs below the knee or over the knee. Pull both knees slowly toward your shoulders.',
        order: 10,
        tags: ['stretch', 'back', 'hips', 'lying']
    },
    {
        image: 'images/pexels-ketut-subiyanto-4909526.jpg',
        name: 'Thigh Stretch',
        reps: '0',
        count: '10-30',
        alternate: "",
        description: 'Stand and bend your left leg back. Grasp the toes of your left foot with your hand and pull your heel toward you. Return to the standing position and repeat the procedures with your right foot.',
        order: 11,
        tags: ['stretch', 'quadriceps', 'legs', 'standing']
    },
    {
        image: 'images/pexels-jacky-xing-776569260-29132146.jpg',
        name: 'Calf Stretch',
        reps: '0',
        count: '10-30',
        alternate: "",
        description: 'Stand and fully extend your left leg in front of you and place the heel of your left foot on the ground. Bend forward at the waist and slightly bend your right knee. Reach down and pull the toes of your left foot toward your shin. Slowly return to the starting position and repeat the same procedures with the opposite leg.',
        order: 12,
        tags: ['stretch', 'calves', 'legs', 'standing']
    },
    {
        image: 'images/pexels-nay-nyo-727253247-31480319.jpg',
        name: 'Side Bend',
        reps: '0',
        count: '10-30',
        alternate: "",
        description: 'Stand straight with your feet shoulder width apart. With your right hand extended overhead, place your left hand on your left hip. Bend at the waist to the left until the point of gentle tension. Return to the straight up position. With your left hand extended overhead and your right hand on your right hip, bend at the waist to the right until the point of gentle tension. Do not twist the body.',
        order: 13,
        tags: ['stretch', 'core', 'standing']
    },

    // Muscular Fitness
    {
        image: 'images/pexels-adrianlimani-34219376.jpg',
        name: 'Jumping Jacks',
        reps: '20',
        count: '4',
        alternate: "",
        description: 'Stand with feet together and hands at your sides. On count 1, jump and land with your feet apart (shoulder-width) while raising your arms straight overhead. On count 2, return to the starting position. Repeat for the required repetitions, maintaining controlled form.',
        order: 14,
        tags: ['cardio', 'full body', 'standing', 'calisthenics']
    },
    {
        image: 'images/pexels-rdne-8401799.jpg',
        name: 'Sit-ups',
        reps: '30',
        count: '2',
        alternate: "",
        description: 'Lie on your back with feet together (or up to 12 inches apart), knees bent at about 90 degrees, and a partner holding your ankles or your feet. Cross your arms over your chest with hands on your shoulders or upper chest. Curl your upper body forward until your elbows touch your knees or thighs, then lower until your shoulder blades to the ground. This completes one repetition. Maintain steady form without using momentum.',
        order: 15,
        tags: ['muscular', 'abdomen', 'assisted', 'lying', 'calisthenics']
    },
    {
        image: 'images/grok-imagine-skier-20260721.jpg',
        name: 'Skier',
        reps: '10',
        count: '4',
        alternate: "",
        description: 'Assume the starting position of the exercise with your left leg and right arm forward and your right leg and left arm back. Your feet should be approximately 12 inches apart from toe to heel. While jumping slightly in the air, alternate your feet each time you land and swing the arms with coordinated arm-swing.',
        order: 16,
        tags: ['cardio', 'full body', 'standing', 'calisthenics']
    },
    {
        image: 'images/pexels-yankrukov-8436439.jpg',
        name: 'Push-ups',
        reps: '5',
        count: '2',
        alternate: "Reverse Lunge",
        description: 'Start in a plank-like position with arms shoulder-width apart and feet together or up to 12 inches apart. Keep your body in a straight line from head to heels. Lower your body until your upper arms are parallel to the ground (elbows bent at about 90 degrees) and then push back up until your arms are fully extended (but not locked). This completes one repetition—keep your body rigid and avoid sagging or piking. Alternate between Push-ups and Reverse Lunge for 3 sets.',
        order: 17,
        tags: ['muscular', 'chest', 'arms', 'alternate', 'calisthenics']
    },
    {
        image: 'images/pexels-shvetsa-5067670.jpg',
        name: 'Reverse Lunge',
        reps: '10',
        count: '4',
        alternate: "Push-ups",
        description: 'Stand with your hands on your waist and your feet spread approximately 6 inches apart. Step back with your left foot. Keeping your back straight, bend at the knees until your right thigh is parallel to the ground. Using your right leg, push your body to the starting position and then alternate legs.Alternate between Push-ups and Reverse Lunge for 3 sets.',
        order: 18,
        tags: ['muscular', 'legs', 'balance', 'standing', 'alternate', 'calisthenics']
    },
    {
        image: 'images/pexels-fernando-capetillo-94107723-38167588.jpg',
        name: 'Squat Thrusts',
        reps: '10',
        count: '4',
        alternate: "",
        description: 'Squat down until your hands are on the ground by your feet. Kick you feet back (push up position). Bring your feet back to the starting position so that you are standing straight up.',
        order: 19,
        tags: ['cardio', 'full body', 'calisthenics']
    },
    {
        image: 'images/grock-imagine-back-raise.jpg',
        name: 'Back Raises',
        reps: '5',
        count: '2',
        alternate: "",
        description: 'Lie on your stomach. Place your hands behind your head and interlace your fingers. Have a spotter hold your feet. With a steady, controlled motion, raise your torso until your chest clears the ground. Do not tighten your leg muscles.',
        order: 20,
        tags: ['muscular', 'back', 'assisted', 'calisthenics']
    },
    {
        image: 'images/grok-pexel-diamond-pushup.jpg',
        name: 'Diamond Push-ups',
        reps: '5',
        count: '2',
        alternate: "Engine",
        description: 'Start in the plank-like position and place your hands close together on the ground directly under your chest so your thumbs and index fingers form a diamond (or triangle) shape. Keep your body in a straight line from head to heels. Lower your chest toward the diamond until your upper arms are approximately parallel to the ground. Push back up until your arms are fully extended. Maintain a rigid body position. No sagging hips or piking. Perform with controlled form. Alternate between Diamond Push-ups and Engine for 3 sets.',
        order: 21,
        tags: ['muscular', 'chest', 'triceps', 'arms', 'alternate', 'calisthenics']
    },
    {
        image: 'images/pexels-roman-odintsov-8084797.jpg',
        name: 'Engine',
        reps: '10',
        count: '4',
        alternate: "Diamond Push-ups",
        description: 'Stand with your arms straight in front of your body, your arms should be parallel to the ground with your palms facing downward. Bring your left knee upward to your elbow until your thigh is parallel to the ground. Return back to the starting position and then alternate legs. Alternate between Diamond Push-ups and Engine for 3 sets.',
        order: 22,
        tags: ['cardio', 'core', 'standing', 'alternate', 'calisthenics']
    },
    {
        image: 'images/pexels-kampus-8638042.jpg',
        name: 'Partial Squat',
        reps: '10',
        count: '2',
        alternate: "",
        description: 'Start with feet shoulder-width apart. Bend your knees and lower your hips into a partial squat (typically to about 45-90 degrees at the knees, or halfway down). Keep your chest up, back straight, and weight on your heels. Your thighs should not go below parallel in a true partial/half squat. Then drive through your heels to return to the starting position. Perform with controlled movement and maintain good posture throughout.',
        order: 23,
        tags: ['muscular', 'legs', 'standing', 'calisthenics']
    },
    {
        image: 'images/grok-imagine-sit-up-001.jpg',
        name: 'Cross-knee Crunch',
        reps: '30',
        count: '2',
        alternate: "",
        description: 'Lie on your back with your hands behind your head or lightly touching your ears (do not pull on your neck). Raise your shoulders off the ground into a crunch position while bringing one knee toward your chest and rotating your opposite elbow across your body to meet it (or toward the knee). Alternate sides in a controlled, twisting motion. Keep your lower back pressed to the ground and avoid pulling on your head. Each side-to-side movement typically counts as one repetition.',
        order: 24,
        tags: ['muscular', 'abdomen', 'core', 'obliques', 'calisthenics']
    },
    {
        image: 'images/grok-imagine-pexels-mountain-climber.jpg',
        name: 'Mountain Climber',
        reps: '15',
        count: '4',
        alternate: "",
        description: 'Squat down until your hands are on the ground by your feet. Fully extend your left leg out keeping your right knee tucked near your chest. Bring your left knee into your chest while extending your right leg and continue alternating legs for the required count.',
        order: 25,
        tags: ['cardio', 'core', 'full body', 'calisthenics']
    },
    {
        image: 'images/pexels-gustavo-fring-6496123.jpg',
        name: 'Reverse Push-ups',
        reps: '5',
        count: '2',
        alternate: "Shoulder Press",
        description: 'Start in a reverse plank position: Sit on the ground with your legs extended straight in front of you, hands placed on the floor just behind your hips (fingers pointing forward or slightly outward), and lift your hips so your body forms a straight line from head to heels (facing upward). From there, bend your elbows to slowly lower your hips and upper body toward the ground without touching it. Press through your hands to push back up to the full reverse plank position. Keep your body straight, core tight, and elbows pointing back throughout the movement. This primarily targets the triceps, shoulders, and core. Alternate between Reverse Push-ups and Shoulder Press for 3 sets. ',
        order: 26,
        tags: ['muscular', 'triceps', 'arms', 'shoulders', 'core', 'alternate', 'calisthenics']
    },
    {
        image: 'images/pexels-beniam-447198297-33650005.jpg',
        name: 'Shoulder Press',
        reps: '10',
        count: '2',
        alternate: "Reverse Push-ups",
        description: 'From the starting position extend your arms overhead and legs straight in front. Lower your hands down to your shoulders. Squeeze your shoulder blades together. Return to the starting position. Alternate between Reverse Push-ups and Shoulder Press for 3 sets. ',
        order: 27,
        tags: ['muscular', 'shoulders', 'arms', 'alternate', 'calisthenics']
    },
    {
        image: 'images/pexels-ketut-subiyanto-4853726.jpg',
        name: 'Cross-knee Sit-ups',
        reps: '30',
        count: '2',
        alternate: "",
        description: 'Lie on your back with knees bent and feet flat on the ground (or held by a partner). Place your hands behind your head or crossed over your chest. Curl your upper body off the ground into a full sit-up while bringing one knee toward your chest and rotating your opposite elbow across your body to meet or pass the knee. Lower back down under control, then repeat on the opposite side. Keep your lower back pressed to the ground during the lowering phase and avoid pulling on your neck. Each side counts as one repetition.',
        order: 28,
        tags: ['muscular', 'abdomen', 'assisted', 'calisthenics']
    },
    {
        image: 'images/pexels-tima-miroshnichenko-6389082.jpg',
        name: 'Pull-ups',
        reps: 'Until failure',
        count: '2',
        alternate: "",
        description: "Start by hanging from a pull-up bar with palms facing away (overhand grip) and hands at about shoulder-width apart with arms fully extended and body straight. Pull your body upward in a controlled motion until your chin clears the bar. Then lower yourself back down until your arms are fully extended. Avoid swinging or kicking your legs for momentum—keep your core tight. Each full up-and-down movement counts as one repetition.",
        order: 29,
        tags: ['muscular', 'back', 'arms', 'pull', 'shoulders', 'pull-up', 'bar', 'calisthenics']
    },
    {
        image: 'images/pexels-ketut-subiyanto-4803683.jpg',
        name: 'Hanging Leg Raises',
        reps: 'Until failure',
        count: '2',
        alternate: "",
        description: 'Hang from a pull-up bar with an overhand grip, arms fully extended, and body straight (or with a slight bend in the knees if needed). Keeping your legs together, raise them upward in a controlled motion and contracting your abs—aim to bring your knees or straight legs to a sitting position. Slowly lower your legs back to the starting position without swinging. Avoid using momentum; focus on core control throughout. Each full raise and lower counts as one repetition.',
        order: 30,
        tags: ['muscular', 'abdomen', 'arms', 'hanging', 'core', 'bar', 'calisthenics']
    },
    {
        image: 'images/pexels-quang-nguyen-vinh-222549-10615645.jpg',
        name: 'Run or Walk',
        reps: 'n/a',
        count: '30+ Min',
        alternate: "",
        description: 'Walk or run for at least 30 minutes every other day. Begin at a comfortable pace and gradually increase your time, distance, or speed as your fitness improves.',
        order: 31,
        tags: ['run', 'walk', 'full-body']
    }
];
const workoutBody = document.querySelector('.workout-body');
const modal = document.querySelector('.instructions-modal');
const instructionsBtn = document.querySelector('.instructions-button');
const closeButton = document.querySelector('.close-viewer');

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

    /*replacing the const variables with query selectors for the three exercise elements.*/
    /*const startingReps = Number(document.querySelector('#rep-number').value);*/
   
    const startingSitUps = Number(document.querySelector('#sit-up-number').value);
    const startingPushUps = Number(document.querySelector('#push-up-number').value);
    const startingSquats = Number(document.querySelector('#squat-number').value);
    
    const startingTime = document.querySelector('#start-time').value;
    console.log(startingTime);
    
    const timeParts = startingTime.split(":");
    const startingHour = Number(timeParts[0]);
    const startingMinutes = Number(timeParts[1]);

    console.log(startingTime);

    /*const sets = [];*/
    const sitUpSets = [];
    const pushUpSets = [];
    const squatSets = [];
    
    for (let i = 0; i < 6; i++) {
        /*const reps = startingReps + i;*/
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
            <td><input type="checkbox" aria-label="Complete set ${i + 1}"></td>
            <td>Set ${i + 1}</td>
            <td>${sitUps}</td>
            <td>${pushUps}</td>
            <td>${squats}</td>
            </tr>
            `;
    }
    /*const total = calculateTotals(sets);
    document.querySelector('.sit-up-total').textContent = total;
    document.querySelector('.push-up-total').textContent = total;
    document.querySelector('.squat-total').textContent = total;*/

    const sitUpTotal = calculateTotals(sitUpSets);
    const pushUpTotal = calculateTotals(pushUpSets);
    const squatTotal = calculateTotals(squatSets);

    document.querySelector('.sit-up-total').textContent = sitUpTotal;
    document.querySelector('.push-up-total').textContent = pushUpTotal;
    document.querySelector('.squat-total').textContent = squatTotal;

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