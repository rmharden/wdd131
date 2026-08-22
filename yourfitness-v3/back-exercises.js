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
        name: 'Back 7:  Superman Elbow Raises',
        reps: '12',
        count: '2',
        alternate: "all back exercises",
        description: 'Lower your legs to the ground and place your arms behind your head, elbows out. Lift your head and shoulders off the ground to start, then raise your left elbow, pause briefly then return to center. Do 6 repetitions.  Perform the same movements with your right elbow. Do 6 repetitions.',
        order: 7,
        tags: ['back', 'muscular', 'core', 'calisthenics', 'arms', 'legs', 'full-body']
    },
    {
        image: 'images/temp-back-photos/banish-back-fat-pushup.jpg',
        image2: 'images/temp-back-photos/banish-back-fat-slow-pushup.jpg',
        name: 'Back 8: Modified Push-Up',
        reps: '12',
        count: '2',
        alternate: "all back exercises",
        description: 'Place your hands directly under your shoulders and bring your body into a pushup position, knees on the ground and heels in towards your tush. Keeping your shoulders in line with your hips, slowly lower yourself down for two counts, then press up for two counts, executing a slow and controlled pushup. Do 12 repetitions.',
        order: 8,
        tags: ['back', 'muscular', 'core', 'calisthenics', 'arms', 'legs', 'full-body']
    }
];

const back = exercises
    .filter((exercise) => exercise.tags.includes("back"))
    .sort((a,b) => a.order - b.order);

const backList = document.querySelector(".back-exercises-checklist");

function checkListTemplate(exercise) {
    return `
        <li class="checklist-item">

            <div class="checklist-images">
                <img src="${exercise.image}" 
                     alt="Photo of ${exercise.name}" 
                     class="checklist-image">

                ${exercise.image2 ?
                    `<img src="${exercise.image2}" 
                          alt="Photo of ${exercise.name}" 
                          class="checklist-image">`
                    : ''}
            </div>

            <input type="checkbox">

            <div class="exercise-info">
                <button class="exercise-name" data-name="${exercise.name}">
                    ${exercise.name}
                </button>

                <span>Count: ${exercise.count}</span>
                <span>Reps: ${exercise.reps}</span>

                ${exercise.alternate ?
                    `<span class="exercise-alternate">
                        | Alternate with ${exercise.alternate} for 3 sets
                    </span>`
                : ''}

                <p class="exercise-description">
                    ${exercise.description}
                </p>
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
if (backList) {
    renderChecklist(back, backList);
}
const exerciseModal = document.querySelector(".exercise-modal");
const modalImage = document.querySelector(".modal-image");
const modalImage2 = document.querySelector(".modal-image2");
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
            if (exercise.image2) {
                modalImage2.src = exercise.image2;
                modalImage2.alt = exercise.name;               
                modalImage2.classList.remove("hide");
            } else {
                modalImage2.classList.add("hide");
            }

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